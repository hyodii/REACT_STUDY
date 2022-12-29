// 스크롤 위치 - 뒤로가기 시 매번 위로 올라가는거 방지
const lastScrollPositionSessionStorageKey = 'page-scroll-position'

useEffect(() => {
  // 로컬스토리지에 등록된 스크롤 위치 호출
  const lastScrollPosition = window.sessionStorage.getItem(lastScrollPositionSessionStorageKey)

  // 스크롤 위치를 로컬스토리지에 저장
  function onScroll() {
    const scrollTop = ref.current?.scrollTop ?? 0
    window.sessionStorage.setItem(
      lastScrollPositionSessionStorageKey,
      JSON.stringify({
        ...JSON.parse(lastScrollPosition),
      [tab.key]: scrollTop
      })
    )
  }
  // 탭이 활성화 되면 scroll 이벤트 등록
  if(isTabActivated(myself)){
    ref.current?.addEventListener('scroll', onScroll())
  }

  // 탭 이동시 자기 탭 스크롤 위치로 세팅
  if(lastScrollPosition) {
    const parsedScrollPosition = JSON.parse(lastScrollPosition)
    ref.current?.scrollTo({top: parsedScrollPosition[tab.key]})
  }
}, [tab.key]);
