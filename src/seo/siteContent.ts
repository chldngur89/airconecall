/** 페이지·FAQ·메타 카피 — SEO 스키마(siteContent)·JSON-LD(schema)와 동기화 유지 */
export const SITE_NAME = '에어컨콜';
/** 대표자 (표기 순) */
export const SITE_REPRESENTATIVES = ['최병성', '최우혁'] as const;
export const SITE_REPRESENTATIVE_LINE = SITE_REPRESENTATIVES.join(', ');
export const AREA_LABEL = '경기 고양시·파주시·포천시';
export const REGIONS_DETAIL = ['고양시', '파주시', '포천시'] as const;

export const META_TITLE =
  '에어컨콜 | 고양·파주·포천 긴급 에어컨 출동 · 기사 매칭 · 점검·수리 · 회원혜택';
export const META_DESCRIPTION =
  `고양시·파주시·포천시 에어컨 고장 긴급 접수. 벽걸이·스탠드·2in1 점검·수리, 등록 파트너 기사 매칭과 회원 리워드 혜택 안내. 대표자 ${SITE_REPRESENTATIVE_LINE} 운영.`;

export const KEYWORDS_META = [
  '에어컨콜',
  '고양 에어컨수리',
  '파주 에어컨수리',
  '포천 에어컨수리',
  '경기 에어컨 긴급',
  '에어컨 출장',
  '벽걸이 에어컨 고장',
  '에어컨 매칭',
  '실외기 고장',
  '냉매 보충',
].join(',');

/** AEO용 — 화면 FAQ + FAQPage 스키마에 동일 사용 */
export const FAQ_ITEMS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: '에어컨콜은 어디 서비스 지역인가요?',
    answer:
      '경기 고양시, 파주시, 포천시를 대상으로 긴급 접수 후 등록 파트너 기사님 매칭을 진행합니다. 접수 시간은 안내대로 진행하지만 출동 가능 여부·도착 시각은 현장 상황에 따라 달라질 수 있습니다.',
  },
  {
    question: '긴급 매칭은 어떻게 진행되나요?',
    answer:
      '증상과 방문 지역 등을 접수하면 수동 순서대로 매칭하며, 15분·30분 검색 단계처럼 기사님이 가시는 구역을 순차적으로 넓히는 과정을 보여 드립니다. 바로 전화가 안 올 경우 대기 상태에서 순차 안내해 드립니다.',
  },
  {
    question: '비용은 언제까지 알 수 있나요?',
    answer:
      '앱에서는 평균 출장비·작업 참고금을 미리 확인한 뒤 현장 진단 후 필요한 부품과 작업에 대해서만 추가 동의를 받도록 안내합니다. 실제 현장 상태에 따라 차이 날 수 있어 현장 확인을 기준으로 합니다.',
  },
  {
    question: '접수는 몇 시까지 되나요?',
    answer:
      '연중무휴로 접수는 받되, 매칭·출동 가능 여부는 파트너 기사 현황과 야간·심야 일정 등에 따라 달라질 수 있습니다.',
  },
  {
    question: '가정 외 업소·매장도 되나요?',
    answer:
      '우선 가정용 벽걸이·스탠드·2in1 위주로 안내하고 있습니다. 업소 규모·업종별로 처리 방식이 달라 접수 후 상세 지역 및 설비 종류 확인이 필요합니다.',
  },
  {
    question: '등록 파트너 기사만 연결된다는 말은 무슨 뜻인가요?',
    answer:
      '사전에 등록되어 검증 절차를 거친 기사님과만 순서 매칭을 시도함을 원칙으로 안내합니다. 동시 접수 증가 시 대기 시간이 길어질 수 있습니다.',
  },
  {
    question: '회원 가입을 하면 어떤 혜택이 있나요?',
    answer:
      '비회원 접수는 그대로 가능하며, 회원으로 등록하면 출동·재이용·추천 관련 리워드 안내를 받을 수 있습니다. 실제 혜택 조건과 금액은 서비스 정책에 따라 안내됩니다.',
  },
];

/** ISO 3166-2 — 경기도 (현지 검색 신호 보조용) */
export const GEO_REGION_META = 'KR-41';
