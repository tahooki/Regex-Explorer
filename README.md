# Regex-Explorer
정규식 검색하는 사이트입니다.

Page
[] main
[] signin
[] regex-test
[] regex-test-create
[] user

functions
[] app guard (auto login)
[v] signin
[] test crud
[] test case crud
[] regex crud
[] user crud

- css 도 만들어야함


- 서비스를 따로 빼야할까
- 아니면 각 모듈에 둬야할까

firebase = service - component - view
mock data...

component use
service.getUser()
service.getTestCaseList()
service.setTestCase()


add remove update get

set get update delete
add update get delete(실 삭제가 아님)
목데이터 관리는 어떻게 할까?
파이어베이스를 ... 쓴다? ㅇㅇ

어차피 데이터 컨트롤이 쉬우니까


# Structure
src
    - app
        - core
            - service : 전체 페이지에 광역으로 사용하는 주요 로직
            - storage :
        - layout : 모든 페이지에 동일하게 들어가는 레이아웃을 만들어 놓는 곳
        - modals : 팝업으로 뜨는 모달류 컴포넌트 모음
        - pages
            - ( route )
                - resolver : 페이지에 들어가기전에 미리 받아와야 하는 값을 서비스 만들어 두는 폴더
                - component : 주 로직, 해당 컴포넌트에서 쓰는 모든 것 
                - service : firebase 와 get, add, update, delete 로 와의 통신 로직을 주로 만드는 서비스


