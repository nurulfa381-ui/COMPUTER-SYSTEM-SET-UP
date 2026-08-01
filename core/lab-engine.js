const LabEngine = {
  mountHotspots({
    container,
    items = [],
    onSelect = null
  }) {
    const labContainer =
      typeof container === "string"
        ? document.querySelector(container)
        : container;

    if (!labContainer) {
      return;
    }

    labContainer.innerHTML =
      items
        .map(
          item => `
            <button
              class="lab-hotspot"
              style="
                left: ${item.x}%;
                top: ${item.y}%;
              "
              data-id="${item.id}"
              data-title="${item.title}"
              data-description="${item.description}"
              aria-label="${item.title}"
            >
              ${item.label || "+"}
            </button>
          `
        )
        .join("");

    labContainer
      .querySelectorAll(
        ".lab-hotspot"
      )
      .forEach(
        hotspot => {
          hotspot.addEventListener(
            "click",
            () => {
              const selectedItem = {
                id:
                  hotspot.dataset.id,
                title:
                  hotspot.dataset.title,
                description:
                  hotspot.dataset.description
              };

              labContainer
                .querySelectorAll(
                  ".lab-hotspot"
                )
                .forEach(
                  item =>
                    item.classList.remove(
                      "active"
                    )
                );

              hotspot.classList.add(
                "active"
              );

              if (
                typeof onSelect ===
                "function"
              ) {
                onSelect(
                  selectedItem
                );
              }
            }
          );
        }
      );
  },

  createDragItem({
    id,
    label,
    image = "",
    category = ""
  }) {
    return `
      <div
        class="lab-drag-item"
        draggable="true"
        data-id="${id}"
        data-category="${category}"
      >
        ${
          image
            ? `<img src="${image}" alt="${label}">`
            : ""
        }

        <span>
          ${label}
        </span>
      </div>
    `;
  },

  enableDragAndDrop({
    itemSelector,
    zoneSelector,
    onCorrect = null,
    onWrong = null,
    onComplete = null
  }) {
    const items =
      document.querySelectorAll(
        itemSelector
      );

    const zones =
      document.querySelectorAll(
        zoneSelector
      );

    let completedItems = 0;

    items.forEach(
      item => {
        item.addEventListener(
          "dragstart",
          event => {
            event.dataTransfer.setData(
              "text/plain",
              JSON.stringify({
                id:
                  item.dataset.id,
                category:
                  item.dataset.category
              })
            );

            item.classList.add(
              "dragging"
            );
          }
        );

        item.addEventListener(
          "dragend",
          () => {
            item.classList.remove(
              "dragging"
            );
          }
        );
      }
    );

    zones.forEach(
      zone => {
        zone.addEventListener(
          "dragover",
          event => {
            event.preventDefault();

            zone.classList.add(
              "drag-over"
            );
          }
        );

        zone.addEventListener(
          "dragleave",
          () => {
            zone.classList.remove(
              "drag-over"
            );
          }
        );

        zone.addEventListener(
          "drop",
          event => {
            event.preventDefault();

            zone.classList.remove(
              "drag-over"
            );

            const data =
              JSON.parse(
                event.dataTransfer.getData(
                  "text/plain"
                )
              );

            const draggedItem =
              document.querySelector(
                `${itemSelector}[data-id="${data.id}"]`
              );

            const acceptedCategory =
              zone.dataset.accept;

            if (
              data.category ===
              acceptedCategory
            ) {
              zone.appendChild(
                draggedItem
              );

              draggedItem.draggable =
                false;

              draggedItem.classList.add(
                "placed"
              );

              completedItems += 1;

              if (
                typeof onCorrect ===
                "function"
              ) {
                onCorrect({
                  item:
                    data.id,
                  zone:
                    acceptedCategory
                });
              }

              if (
                completedItems ===
                items.length &&
                typeof onComplete ===
                  "function"
              ) {
                onComplete();
              }
            } else if (
              typeof onWrong ===
              "function"
            ) {
              onWrong({
                item:
                  data.id,
                zone:
                  acceptedCategory
              });
            }
          }
        );
      }
    );
  },

  zoom({
    target,
    min = 0.8,
    max = 2,
    step = 0.1
  }) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) {
      return null;
    }

    let scale = 1;

    return {
      zoomIn() {
        scale =
          Math.min(
            max,
            scale + step
          );

        element.style.transform =
          `scale(${scale})`;

        return scale;
      },

      zoomOut() {
        scale =
          Math.max(
            min,
            scale - step
          );

        element.style.transform =
          `scale(${scale})`;

        return scale;
      },

      reset() {
        scale = 1;

        element.style.transform =
          "scale(1)";

        return scale;
      }
    };
  },

  rotate({
    target,
    step = 15
  }) {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) {
      return null;
    }

    let rotation = 0;

    return {
      rotateLeft() {
        rotation -= step;

        element.style.transform =
          `rotate(${rotation}deg)`;

        return rotation;
      },

      rotateRight() {
        rotation += step;

        element.style.transform =
          `rotate(${rotation}deg)`;

        return rotation;
      },

      reset() {
        rotation = 0;

        element.style.transform =
          "rotate(0deg)";

        return rotation;
      }
    };
  },

  saveSimulationProgress({
    missionId,
    simulationId,
    progress,
    completed = false
  }) {
    const profile =
      C01Storage.requireProfile();

    profile.simulationProgress =
      profile.simulationProgress ||
      {};

    profile.simulationProgress[
      missionId
    ] =
      profile.simulationProgress[
        missionId
      ] || {};

    profile.simulationProgress[
      missionId
    ][simulationId] = {
      progress,
      completed,
      updatedAt:
        new Date().toISOString()
    };

    C01Storage.saveProfile(
      profile
    );
  }
};

window.LabEngine =
  LabEngine;
