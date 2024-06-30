document.addEventListener("DOMContentLoaded", function () {
  const categoryContainer = document.querySelector(".categoetContainer");
  const primaryCategoryWrap = document.querySelector(".primaryCategory_wrap");
  const primaryCategories = document.querySelectorAll(".primaryCategory");
  const subCategoryWrap = document.querySelector(".subCategory_wrap");

  categoryContainer.addEventListener("mouseenter", function () {
    primaryCategoryWrap.style.display = "flex";
  });

  categoryContainer.addEventListener("mouseleave", function (e) {
    if (
      !primaryCategoryWrap.contains(e.relatedTarget) &&
      !subCategoryWrap.contains(e.relatedTarget)
    ) {
      primaryCategoryWrap.style.display = "none";
      subCategoryWrap.style.display = "none";
      document.querySelectorAll(".subCategory").forEach((subCategory) => {
        subCategory.classList.remove("show");
        subCategory.style.display = "none";
      });
    }
  });

  primaryCategoryWrap.addEventListener("mouseleave", function (e) {
    if (
      !categoryContainer.contains(e.relatedTarget) &&
      !subCategoryWrap.contains(e.relatedTarget)
    ) {
      primaryCategoryWrap.style.display = "none";
      subCategoryWrap.style.display = "none";
      document.querySelectorAll(".subCategory").forEach((subCategory) => {
        subCategory.classList.remove("show");
        subCategory.style.display = "none";
      });
    }
  });

  subCategoryWrap.addEventListener("mouseleave", function (e) {
    if (
      !categoryContainer.contains(e.relatedTarget) &&
      !primaryCategoryWrap.contains(e.relatedTarget)
    ) {
      subCategoryWrap.style.display = "none";
      document.querySelectorAll(".subCategory").forEach((subCategory) => {
        subCategory.classList.remove("show");
        subCategory.style.display = "none";
      });
    }
  });

  primaryCategories.forEach((category) => {
    category.addEventListener("mouseenter", function () {
      document.querySelectorAll(".subCategory").forEach((subCategory) => {
        subCategory.classList.remove("show");
        subCategory.style.display = "none";
      });

      const subCategory = document.querySelector(
        `.subCategory[id="${category.id}"]`
      );
      if (subCategory) {
        subCategory.style.display = "block";
        setTimeout(() => {
          subCategory.classList.add("show");
        }, 0);
        subCategoryWrap.style.display = "flex";
      }
    });
  });
});
