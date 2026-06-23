---
type: Benchmark
title: τ³-Banking (τ-Knowledge)
aa_metric: τ³-Banking
column: "Banking"
domain: Agentic Tool Use
category: 에이전트
description: 약 700개 비정형 정책 문서를 검색·이해하며 동시에 도구로 은행 DB 상태를 정책대로 바꾸는 핀테크 고객지원 에이전트 평가. 정식 논문은 τ-Knowledge.
# 레이더 기여 (SSOT — build_cards.py가 읽음)
axes:
  - { axis: agentic, weight: 1.0 }   # 주 기여: 비정형 문서 검색 + 도구 기반 상태 변경 통합
attributes:
  modality: text
  task_type: 다중턴 대화형 에이전트(검색 + 도구 호출 + 상태 변경)
  scoring: "pass^k (k번 독립 시도 모두 성공할 확률)"
  scale: "0–100%"
  pass_rate_sota: "약 25.5% (GPT-5.2 high, terminal 검색, pass^1)"
  n_docs: 698
  n_topics: 71
  n_categories: 21
  n_tokens_kb: 194562
  n_discoverable_tools: 51
  n_permanent_tools: 14
  n_tasks: 97
  avg_docs_per_task: 18.6
  avg_tool_calls_per_task: 9.52
  retrieval_modes: [embedding(dense), BM25(sparse), terminal(shell), golden-retriever]
  difficulty: 매우 높음 · 미포화
  coverage: 낮음 (리더보드 일부 모델만 측정)
  contamination_risk: 낮음 (2026 신규 · 동적 DB 상태)
  higher_is_better: true
org: Sierra / Princeton University
year: 2026
resource: https://arxiv.org/abs/2603.04370
paper: /benchmarks/sources/tau3-bench-2603.04370.pdf
tags: [agentic, tool-use, rag, retrieval, banking, fintech]
timestamp: 2026-06-23T00:00:00Z
---

# 무엇을 측정하나

약 **698개의 상호 연결된 비정형(unstructured) 지식 문서**로 이루어진 핀테크(은행) 고객지원 환경에서, 에이전트가 **방대한 사내 정책·상품 문서를 검색·독해(RAG/문서 검색)** 하면서 동시에 **계좌 개설·해지, 카드 재발급, 분쟁 제기 같은 도구 기반 상태 변경**을 정책에 어긋나지 않게 정확히 수행하는지를 한 대화 흐름 안에서 통합 측정한다.

핵심은 "검색"과 "도구 사용"을 **따로따로가 아니라 함께** 본다는 점이다. 논문의 문제의식은, 기존 벤치마크가 검색은 검색대로(질의-문서 매칭) 도구는 도구대로(이미 다 주어진 도구 인터페이스) 고립 평가해 왔다는 것이다. 현실의 업무 에이전트는 **사내 지식베이스에서 절차·정책을 먼저 찾아 이해한 뒤에야** 올바른 상태 변경 행위를 할 수 있다. τ-Banking은 바로 이 결합 지점을 노린다.

특히 이 환경에서 **능력(사용 가능한 도구)은 에이전트에게 처음부터 다 주어지지 않는다.** 일부 도구는 문서 안에서만 언급되는 "discoverable tools"라서, 문서를 제대로 검색해 그 존재를 발견해야만 호출할 수 있다(`call_discoverable_tool(name, kwargs)`). 즉 상태를 바꾸는 권한 자체가 "올바른 지식 접근"에 종속되도록 설계되어, 검색 실패가 곧 실행 실패로 드러난다.

# 과제 형식 / 예시

- **다중턴 대화형 에이전트 과제**. 형식적으로는 에이전트와 (시뮬레이션된) 사용자가 함께 부분관측 상태를 공유하는 **Dec-POMDP**로 정의된다. 전역 상태 S = 은행 DB 상태(S_db) × 대화 이력(S_history)이며, 에이전트는 S_db를 직접 보거나 고칠 수 없고 **도구 출력과 사용자 발화로만 상태를 추론**한다.
- **지식베이스**: 698개 문서, 71개 주제, 21개 상품 카테고리, 약 194,562 토큰(cl100k 기준). 개인·법인 당좌, 등급별(브론즈~다이아몬드 엘리트) 저축, 리워드 카드, BNPL 등 고객용 스펙(APY·최소잔액·인출한도·수수료)뿐 아니라 **내부 직원 프로토콜**(분실/도난/파손 카드 재발급 절차, 계좌 해지 자격, 추천 프로그램 규칙·상태 코드, 본인확인 절차, 공동명의 권한, 사용자 차단 정책)까지 담고 있다.
- **도구**: 상시 도구 14개 + 발견형 도구 51개. 과제는 총 97개, **과제당 평균 18.6개 문서**가 필요하고 **평균 9.52회 도구 호출**(최소 1, 최대 33)을 요구한다.
- **사용자 시뮬레이션**: 흐름 기반(flow-based)으로, 관측된 에이전트 행동·환경 결과에 따라 사용자의 다음 발화가 조건부로 정해진다. 일부 사용자 진술은 **일부러 틀리거나 미명세**라서, 에이전트가 그대로 믿지 않고 시스템 상태에 대조·확인하는지를 시험한다.
- **예시(논문 Fig.1)**: "지갑을 도난당했는데 카드를 동결(freeze)해 달라"는 요청. 그러나 카드별 정책과 거래내역 제약을 문서에서 찾아보면, 의심 거래가 있어 **동결이 아니라 해지(cancel)** 해야 한다는 결론이 나온다. 사용자의 1차 요청을 따르지 않고 정책 근거로 올바른 행위를 선택하는지가 채점된다.

# 채점 방식

- 지표는 **pass^k** — 한 과제를 **k번의 독립 시도에서 모두** 성공할 확률. 논문은 k ≤ 4까지 보고한다. (단발 성공률 pass^1이 아니라 "반복해도 매번 되는가"를 보므로 신뢰성에 민감하다.)
- 성공 판정은 **목표 DB 최종 상태**로 객관 검증한다. 각 과제는 도달해야 할 S_db 상태를 명시하고, 에이전트가 검색→추론→도구 호출을 거쳐 그 최종 상태를 만들어 냈는지로 보상 R: S → [0,1]을 준다.
- 검색 방식은 평가 대상에서 분리(agnostic)되어 여러 구성으로 측정한다: dense(text-embedding-3-large, Qwen3-emb-8b), sparse(BM25), **terminal**(샌드박스 파일시스템에서 grep/cat/find로 탐색), 그리고 **golden retriever**(정답 문서를 처음부터 컨텍스트에 넣어 검색 변수를 제거한 상한 측정).

# 점수 해석 (높음 / 낮음)

- **높음** = 방대한 사내 문서를 뒤져 정확한 근거를 찾고, 그 정책대로 실제 작업(도구 호출)을 정확히, 그리고 반복해도 안정적으로 수행한다. 사내 지식베이스 기반 업무 자동화에 직결.
- **낮음** = 검색이 빈약하거나, 찾은 문서를 잘못 해석하거나(상호의존 상품·정책을 다중 홉으로 못 잇거나), 사용자 말을 검증 없이 따라가 잘못된 상태 변경을 일으킨다.
- **golden 설정에서도 낮다면** = 검색이 아니라 **추론·정책 적용 자체**가 약하다는 뜻(아래 SOTA 참조).

# 난이도 · 포화 · 현 SOTA

- 프런티어 모델 + 최상 검색 구성에서도 **best pass^1 ≈ 25.52%** (GPT-5.2 high, terminal). Claude-4.5-Opus·Sonnet이 terminal에서 그 뒤(약 24.7·22.4 pass^1).
- **신뢰성은 급락**한다. k가 커질수록 떨어져 **best pass^4 ≈ 13.40%**(GPT-5.2 high, Qwen-emb). 즉 "한 번은 되지만 매번 되지는" 못한다.
- 검색을 병목에서 제거한 **golden retriever**에서도 최고가 **39.69 pass^1**(Claude-4.5-Opus high)이고 pass^4에서 26.80으로 떨어진다 → **검색만 잘해서는 풀리지 않으며, 동적 DB 상태와 교차문서 의존을 "추론"하는 능력**이 함께 필요함을 입증.
- 모델·검색 구성에 따라 **효율 차이**도 크다. 예: GPT-5.2(high) terminal은 Claude-4.5-Opus(high) terminal과 성능은 비슷하지만 토큰 약 1.7배, 셸 명령 약 2.3배, 소요시간 약 9배. Claude는 더 적은 토큰(0.7M vs 1.2M)·더 적은 검색 호출로 같은 성능에 도달.
- 종합: **현존하는 가장 포화되지 않은(미해결) 에이전트 벤치마크 중 하나**. 상·하위 변별력이 매우 크다.

# 한계 · 주의 (명명 · 커버리지)

- **명명 주의 — "τ³-bench"라는 단독 논문은 없다.** 정식 논문은 **τ-Knowledge**(arXiv 2603.04370, Sierra·Princeton). "τ³" 표기는 Sierra 계열 τ-Bench 후속을 가리키는 통칭이고, 본 평가에서 새로 추가된 것은 **τ-Banking 도메인**이다. 본 문서의 리더보드 키도 유니코드 τ 회피를 위해 부분일치 키 **"Banking"** 을 쓴다("𝜏³-Banking Agentic Tool Use" 헤더의 고유 부분).
- **커버리지 낮음**: 2026년 신규라 리더보드에 **일부 프런티어 모델만** 점수가 있다. 레이더에서 단일 소스로 결측이 잦을 수 있다(집계는 "있는 것만" 규칙).
- **단일 도메인(은행)**: 핀테크 한 도메인이라 에이전트 능력 전반의 대리지표로는 부분적.
- **사용자 시뮬레이션은 LLM 기반**: 단순화돼 실제 인간의 표현 다양성·오타·구어를 다 담지 못한다(논문 한계로 명시). 다만 194개 궤적 중 task-critical 시뮬레이터 오류는 4건뿐으로 낮은 편.
- **효율·지연 수치는 현 API 서빙 특성에 묶여** 절대 latency는 환경마다 다를 수 있다.

# 다른 벤치마크와의 관계

- [[tau2-bench]] τ²-Bench(Barres et al., 2025): 이중 통제(dual-control) 대화 환경. τ-Knowledge는 τ-Bench(Yao et al., 2025) 계보의 확장으로, τ-Bench/τ²-Bench가 **도구·절차를 대체로 처음부터 제공**한 것과 달리 **비정형 문서 검색으로 절차·도구를 스스로 발견**하게 만든 점이 결정적 차이다.
- 검색 단독 벤치마크(MTEB·BEIR·BRIGHT 등)와 달리, 검색 품질을 **과제 성공·신뢰성에 미치는 영향**으로 환산해 본다.
- 긴문맥 단독 평가(예: long-context 설정)와 달리, 전체 문서를 컨텍스트에 다 넣어도(long-context 변형) pass^1이 약 12%에 그쳐 **표적 검색이 여전히 유효**함을 보였다.

# 레이더 기여 근거

- **agentic (1.0)**: 본질이 "비정형 사내 문서 검색 + 정책 준수형 도구 상태 변경"의 결합 — 에이전트 축의 핵심 역량을 거의 그대로 측정하므로 단일·최대 가중치. 추론·긴문맥 요소도 있으나, 평가가 **검색→도구 실행의 업무 수행** 그 자체로 점수화되므로 에이전트 축에 전량 귀속한다.

# 한국 · 앨런 관점

사내 규정·상품 약관·내부 매뉴얼이 방대한 한국 금융·핀테크·보험·통신 환경에서, 모델이 **사내 지식베이스를 뒤져 정확한 근거를 찾고 그 규정대로 실제 처리(도구 호출)** 까지 해낼 수 있는지를 가장 현실적으로 가늠하는 축이다. 점수가 낮다는 것은 곧, "검색 한 번은 되더라도 반복 업무로 맡기기엔 아직 위험"하다는 실무적 신호로 읽으면 된다. 커버리지가 낮으니 레이더에서 결측이면 "측정 안 됨"으로 해석한다.

# 원본 자료

- 논문 PDF: [tau3-bench-2603.04370.pdf](/benchmarks/sources/tau3-bench-2603.04370.pdf)
- 관련: [[tau2-bench]] · 축 정의: [[radar-spec]] · 능력 영역: [[domains-index]] → Agentic Tool Use

# Citations

[1] [τ-Knowledge: Evaluating Conversational Agents over Unstructured Knowledge (arXiv 2603.04370)](https://arxiv.org/abs/2603.04370)
[2] [τ-Bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains (Yao et al., ICLR 2025)](https://arxiv.org/abs/2406.12045)
[3] [τ²-Bench: Evaluating Conversational Agents in a Dual-Control Environment (Barres et al., 2025, arXiv 2506.07982)](https://arxiv.org/abs/2506.07982)
