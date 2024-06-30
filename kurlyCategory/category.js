document.addEventListener("DOMContentLoaded", function () {
  const categoryContainer = document.querySelector(".categoetContainer");
  const primaryCategoryWrap = document.querySelector(".primaryCategory_wrap");
  const primaryCategories = document.querySelectorAll(".primaryCategory");
  const subCategoryWrap = document.querySelector(".subCategory_wrap");

  categoryContainer.addEventListener("mouseenter", function () {
    primaryCategoryWrap.style.display = "flex";
  });

  // 마우스가 카테고리 컨테이너, 대분류 카테고리 영역, 서브 카테고리 영역에 있을 때는 숨기지 않음
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

  // 각 대분류 카테고리에 마우스가 들어가면 해당 서브 카테고리 보이기
  primaryCategories.forEach((category) => {
    category.addEventListener("mouseenter", function () {
      // 모든 서브 카테고리 숨기기
      document.querySelectorAll(".subCategory").forEach((subCategory) => {
        subCategory.classList.remove("show");
        subCategory.style.display = "none"; // display 속성 변경
      });

      // 해당 서브 카테고리 보이기
      const subCategory = document.querySelector(
        `.subCategory[id="${category.id}"]`
      );
      if (subCategory) {
        subCategory.style.display = "block"; // display 속성 변경
        setTimeout(() => {
          subCategory.classList.add("show");
        }, 0); // 딜레이를 0으로 설정하여 다음 렌더링 사이클에서 opacity 전환이 시작되도록 함
        subCategoryWrap.style.display = "flex";
      }
    });
  });
});
