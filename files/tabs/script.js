document.addEventListener("DOMContentLoaded", function () {
	var parentTabs = document.querySelectorAll('.tabs__wrap-tab .tab');

	parentTabs.forEach(function (parentTab) {
		parentTab.addEventListener('click', function () {
			var parentTabId = this.getAttribute('data-tab');
			var correspondingParentTabContent = document.querySelector('.tabContent[data-tabcontent="' + parentTabId + '"]');

			// Убираем активные классы у всех родительских вкладок и контентов
			document.querySelectorAll('.tabs__wrap-tab .tab').forEach(function (tab) {
				tab.classList.remove('tab-active');
			});
			document.querySelectorAll('.tabContent').forEach(function (content) {
				content.classList.remove('content-active');
			});

			// Добавляем активные классы к выбранной родительской вкладке и контенту
			this.classList.add('tab-active');
			correspondingParentTabContent.classList.add('content-active');
		});
	});

	var subTabs = document.querySelectorAll('#subTabs .subTab');

	subTabs.forEach(function (subTab) {
		subTab.addEventListener('click', function (event) {
			event.stopPropagation(); // Останавливаем всплытие события

			var subTabId = this.getAttribute('data-tab');
			var correspondingSubTabContent = document.querySelector('#subTabs .subTabContent[data-tabcontent="' + subTabId + '"]');

			// Убираем активные классы у всех суб-вкладок и контентов
			document.querySelectorAll('#subTabs .subTab').forEach(function (subTab) {
				subTab.classList.remove('subTab-active');
			});
			document.querySelectorAll('.subTabContent').forEach(function (content) {
				content.classList.remove('subContent-active');
			});

			// Добавляем активные классы к выбранной суб-вкладке и контенту
			this.classList.add('subTab-active');
			correspondingSubTabContent.classList.add('subContent-active');
		});
	});
});