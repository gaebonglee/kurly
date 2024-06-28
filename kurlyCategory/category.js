document.addEventListener("DOMContentLoaded", function () {
  const categoryContainer = document.querySelector(".categoetContainer");
  const primaryCategoryWrap = document.querySelector(".primaryCategory_wrap");
  const primaryCategories = document.querySelectorAll(".primaryCategory");
  const subCategoryWrap = document.querySelector(".subCategory_wrap");
  const subCategories = document.querySelectorAll(".subCategory");

  categoryContainer.addEventListener("mouseenter", function () {
    primaryCategoryWrap.style.display = "flex";
  });

  categoryContainer.addEventListener("mouseleave", function (event) {
    if (
      !primaryCategoryWrap.contains(event.relatedTarget) &&
      !subCategoryWrap.contains(event.relatedTarget)
    ) {
      primaryCategoryWrap.style.display = "none";
      subCategories.forEach((subCategory) => {
        subCategory.style.display = "none";
      });
    }
  });

  primaryCategoryWrap.addEventListener("mouseleave", function (event) {
    if (
      !categoryContainer.contains(event.relatedTarget) &&
      !subCategoryWrap.contains(event.relatedTarget)
    ) {
      primaryCategoryWrap.style.display = "none";
      subCategories.forEach((subCategory) => {
        subCategory.style.display = "none";
      });
    }
    subCategoryWrap.style.display = "block";
  });

  primaryCategories.forEach((category) => {
    category.addEventListener("mouseenter", function () {
      const id = category.id;
      subCategories.forEach((subCategory) => {
        if (subCategory.id === id) {
          subCategory.style.display = "block";
        } else {
          subCategory.style.display = "none";
        }
      });
      subCategoryWrap.style.display = "block";
    });

    category.addEventListener("mouseleave", function (event) {
      if (
        !event.relatedTarget ||
        !event.relatedTarget.closest(".subCategory")
      ) {
        subCategories.forEach((subCategory) => {
          if (!subCategory.contains(event.relatedTarget)) {
            subCategory.style.display = "none";
          }
        });
      }
    });
  });

  subCategories.forEach((subCategory) => {
    subCategory.addEventListener("mouseenter", function () {
      subCategory.style.display = "block";
    });

    subCategory.addEventListener("mouseleave", function () {
      subCategory.style.display = "none";
    });
  });

  subCategoryWrap.addEventListener("mouseleave", function (event) {
    if (
      !primaryCategoryWrap.contains(event.relatedTarget) &&
      !categoryContainer.contains(event.relatedTarget)
    ) {
      subCategories.forEach((subCategory) => {
        subCategory.style.display = "none";
      });
      primaryCategoryWrap.style.display = "none";
    }
  });
});
