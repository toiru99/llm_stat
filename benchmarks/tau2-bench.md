---
type: Benchmark
title: τ²-Bench (Telecom)
aa_metric: τ²-Bench Telecom
column: "τ²-Bench Telecom"
domain: Agentic Tool Use
category: 에이전트
# 레이더 기여 (SSOT — build_cards.py가 읽음)
axes:
  - { axis: agentic, weight: 1.0 }   # 주 기여: 도구 사용·이중제어 협업
attributes:
  modality: text
  task_type: 다중턴 대화형 에이전트 (이중제어 도구 사용)
  scoring: "pass^k (k회 독립 실행 모두 성공한 비율)"
  scale: "0–100%"
  formalism: Dec-POMDP (분산 부분관측 마르코프 결정과정)
  control: dual-control (에이전트·사용자 둘 다 도구 사용)
  domains: [telecom (신규), retail (계승), airline (계승)]
  domain_focus: Telecom 통신 기술지원
  n_tasks_telecom: 114 (조합 생성 시 전체 2285개)
  task_generator: compositional task generator (init/solution/assertion 함수)
  user_simulator: "환경에 강결합된 신뢰성 높은 사용자 시뮬레이터 (telecom 오류율 16%, critical 6%)"
  personas: [None, Easy, Hard]
  issue_types: [service_issue, mobile_data_issue, mms_issue]
  scoring_telecom: assertion 함수 기반 (최종 상태 검증)
  lineage: "τ-Bench(2024 retail·airline) → τ²-Bench(2025 telecom) → τ³/τ-Knowledge(2026 banking)"
  saturation: 낮음 (telecom이 가장 어려움 · 미포화)
  contamination_risk: 낮음 (조합적 동적 생성)
  higher_is_better: true
org: Sierra
year: 2025
resource: https://arxiv.org/abs/2506.07982
paper: /benchmarks/sources/tau2-bench-2506.07982.pdf
tags: [agentic, tool-use, conversation, telecom, dec-pomdp, dual-control]
timestamp: 2026-06-23T00:00:00Z
---

# 무엇을 측정하나

에이전트와 사용자가 **둘 다 도구(tool)를 써서** 공유 환경의 상태를 바꾸는 **이중 제어(dual-control)** 상황에서, 대화형 에이전트의 협업·조율·추론 능력을 측정한다.

기존 대화형 에이전트 벤치마크는 거의 전부 **단일 제어(single-control)** 였다. 즉 에이전트만 세계(world)와 상호작용할 수 있고, (시뮬레이션된) 사용자는 선호·목표 정보를 제공하는 수동적 정보원에 머물렀다. 그러나 통신사 기술지원 같은 현실 상황은 다르다 — 사용자가 직접 "휴대폰을 재시작"하거나 "비행기 모드를 끄는" 등 **세계 상태를 능동적으로 변경**해야 문제가 풀린다. τ²-Bench는 이 격차를 메우려고, 사용자도 자기 쪽 도구로 행동·관찰할 수 있는 환경을 도입했다.

핵심은 두 가지를 동시에 가린다는 점이다. (1) 정책 문서를 이해하고 올바른 행동 순서를 찾아내는 **추론(reasoning)**, (2) 자기 환경밖에 못 보는 사용자에게 정확히 지시하고 협력해 문제를 해결하는 **소통·협업(communication/coordination)**. τ²-Bench의 ablation은 이 둘을 분리해 진단할 수 있게 설계됐다(아래 참조).

# 과제 형식 / 예시

- **다중턴 대화** 형식. 에이전트(LLM)와 시뮬레이션된 사용자가 자연어 메시지를 주고받으며, 각자 자기 도구를 호출해 공유 세계 상태를 바꾼다.
- 평가 대상은 **신규 Telecom 도메인**(통신 기술지원). retail·airline 도메인은 원조 τ-Bench에서 계승.
- Telecom에서 에이전트는 CRM성 도구(예: `get_customer_by_id(id)`, `enable_roaming(customer_id, line_id)`)를, 사용자는 자기 휴대폰을 조작하는 도구(예: `toggle_airplane_mode()`, `user_tools.get_status_bar()`, `user_tools.toggle_data()`)를 쓴다.
- **예시 흐름**(논문 Figure 2): 사용자 "모바일 데이터가 안 돼요" → 에이전트 "상태바를 확인해 주시겠어요?" → 사용자가 `get_status_bar()` 호출(읽기 도구) → "데이터 비활성화로 보이네요" → 에이전트 "데이터를 켜 주세요" → 사용자 `toggle_data()` 호출(쓰기 도구) → "이제 켜졌습니다". 우측 분기에서는 로밍 미설정이 원인이라, 에이전트가 자기 쪽 `enable_roaming()`을 호출해 사용자 휴대폰의 상태까지 바꾼다.
- 과제는 손으로 만든 게 아니라 **조합적 과제 생성기(compositional task generator)** 가 원자적 부품에서 자동 합성한다. 각 원자 서브태스크 `t`는 세 종류 함수로 정의된다: 초기화 `f^init`(예: `set_airplane_mode(True)`), 해법 `f^sol`(예: `toggle_airplane_mode()` — 반드시 에이전트나 사용자가 쓸 수 있는 도구여야 함), 검증 `f^assert`(예: `assert_service_status("connected")`).
- Telecom은 난이도 오름차순의 3개 사용자 의도(`service_issue` → `mobile_data_issue` → `mms_issue`)에 대해 **15개 원자 서브태스크 그룹**을 만들고, 이를 조합해 **2285개** 과제를 생성한 뒤 분포 균형을 맞춰 **114개**를 표본 추출해 평가에 쓴다.
- 과제별로 사용자에게 **페르소나**(None / Easy / Hard)를 무작위 부여한다. Easy는 도메인에 익숙한 사용자, Hard는 기술 이해가 낮은 까다로운 사용자.

# 채점 방식

- 지표는 **pass^k** — *k*번의 독립 실행이 *모두* 성공한 비율. (원조 τ-Bench가 도입한 신뢰성 지표로, 한 번 맞히는 것보다 *일관되게* 맞히는지를 본다.)
- 과제 성공 판정 기준은 여러 종류가 있다: DB 검사, 상태 어서션(최종 world 상태 검증), 자연어 어서션(대화 이력 검증), 행동 매칭(해법 도구가 실제로 호출됐는지). **Telecom 도메인은 assertion 함수만으로** 성공을 판정한다 — 최종 상태 `S`가 모든 어서션을 만족하고, 해법 함수 적용 전에는 미해결이어야 함.
- 채점은 전부 **자동·결정론적**. 모델 온도는 0으로 고정해 재현성을 높였다.

# 점수 해석 (높음 / 낮음)

- **높음** = 여러 턴의 대화로 사용자와 협업하며, 정책 문서를 정확히 이해하고 도구를 올바른 순서로 호출해 문제를 끝까지 해결하는 능력이 강함. 고객지원·헬프데스크형 활용에 직결.
- **낮음** = 단독 추론은 되더라도 사용자에게 정확히 지시·협력하는 분산 제어 상황에서 무너짐. 또는 다단계 정책 추론에서 길을 잃음.
- pass^1과 pass^4의 격차가 크면 = **일관성(신뢰성) 부족** — 운 좋게 한 번 맞히는 수준.

# 난이도 · 포화 · 현 SOTA

- Telecom은 retail·airline보다 확연히 어렵다. `gpt-4.1` pass^1 기준 retail 74% / airline 56% → **telecom 34%** 로 급락. `o4-mini`는 42%, `claude-3-7-sonnet`은 49%(논문 발표 기준 모델들).
- *k*가 커질수록 telecom의 pass^k가 다른 도메인보다 더 빨리 떨어진다 → telecom에서의 **일관성이 특히 낮다**.
- **이중 제어가 핵심 병목**임을 ablation이 보여준다. No-User 모드(에이전트가 모든 도구를 혼자 조작, 순수 추론만 측정)에서 Default 모드(사용자와 협업)로 바꾸면 pass^1이 **약 18~25%p 하락**(gpt-4.1 18%p, o4-mini 25%p). Oracle Plan(정답 도구 순서를 미리 줌)을 주면 크게 오른다(o4-mini 0.42→0.96) → 추론 부담이 큰 비중을 차지함을 시사.
- 행동 수·서브태스크 수가 늘수록 성능이 거의 0에 수렴(Default 모드, 행동 7개 초과 시) → **장기 지평(long-horizon) 신뢰성**이 미해결 과제. 이슈 유형별로도 `mobile_data_issue`·`mms_issue`(다단계·의존성 있음)가 `service_issue`(단순)보다 훨씬 어렵다.
- 종합적으로 telecom은 **현재 가장 포화되지 않은(미해결) 에이전트 벤치마크 축** 중 하나로, 중상위 모델 변별에 유효.

# 한계 · 주의

- **범위 협소**: 리더보드 열이 가리키는 건 Telecom 도메인 단일 점수. "에이전트 능력" 전반의 대리지표로는 부분적이라, 레이더에서 다른 에이전트 벤치마크와 함께 agentic 축을 구성한다.
- **사용자 시뮬레이터 의존**: 사용자도 LLM(`gpt-4.1`)이 시뮬레이션한다. 다만 사용자 도구·관측 상태로 행동을 강하게 제약해 신뢰성을 끌어올렸다 — telecom 사용자 오류율 16%(critical 6%)로, τ-Bench retail의 40%(critical 12%)보다 크게 개선. 그래도 시뮬레이터 품질이 점수에 영향을 줄 수 있다.
- **"복잡성 비대칭(complexity asymmetry)" 설계 제약**: 사용자에게 너무 강한 도구를 주면 사용자가 혼자 다 풀어버려 에이전트 평가가 무의미해진다. 그래서 사용자 도구는 사람이 읽을 수 있는 출력만 내고, 반응적 도구 사용에 한정하도록 의도적으로 제약했다.
- **모델 시점 주의**: 논문 수치는 2025년 4월 시점 모델(gpt-4.1, o4-mini, claude-3-7-sonnet 등) 기준. 최신 프런티어 점수는 리더보드 참조.
- **비용**: 한 trial·전 도메인 1회 실행에 약 \$40(논문 기준).

# 계보 — τ → τ² → τ³

- **τ-Bench**(2024, arXiv 2406.12045): 원조. retail·airline 두 도메인, 단일 제어. pass^k 지표와 "도메인 정책 준수 + 사용자 인지 상태 만족"이라는 제약 충족 과제 틀을 확립.
- **τ²-Bench**(2025, arXiv 2506.07982): 본 문서. 사용자에게도 도구를 줘 **이중 제어로 일반화**, Dec-POMDP로 정식화, Telecom 도메인·조합 생성기·신뢰성 높은 사용자 시뮬레이터·세분화된 실패 진단(reasoning vs communication)을 추가.
- **τ³ / τ-Knowledge**(2026, arXiv 2603.04370): 약 700개 비정형 정책 문서를 검색(RAG)하며 동시에 도구로 상태를 바꾸는 Banking 도메인으로 확장. [[tau3-banking]] 참조.

# 다른 벤치마크와의 관계

- [[tau3-banking]] τ³/τ-Knowledge — 같은 Sierra 계보의 다음 세대. 검색(RAG) 능력을 도구 사용에 통합.
- [[terminal-bench]] Terminal-Bench — 터미널/셸 기반 단독 에이전트 수행(이중 제어 아님).
- [[apex-agents]] · [[itbench]] — 다른 성격의 에이전트 수행(agentic 축 동반).
- [[ifbench]] IFBench — 지시 따르기 축(형식·제약 준수). τ²는 협업·도구 사용에 초점.

# 레이더 기여 근거

- **agentic (1.0)**: 본질이 다중턴 도구 사용 + 이중 제어 협업 → 에이전트 축 주 기여(단일 축, 가중치 1.0). 추론·소통이 섞여 있으나 측정 단위가 "과제를 도구로 끝까지 해결"하는 에이전트 수행이므로 agentic 축에 귀속.

# 한국 · 앨런 관점

통신사·고객센터처럼 **상담원이 고객을 단계별로 안내해 기기를 직접 조작하게 만드는** 한국형 기술지원 시나리오와 정확히 맞물린다. 에이전트가 한국어로 고객을 응대하며 정책대로 도구를 호출하는 헬프데스크 자동화의 신뢰성을 가늠하는 축. pass^k가 높다는 건 "한 번 운 좋게"가 아니라 **반복해도 일관되게** 문제를 푼다는 뜻이라, 실서비스 배치 적합성을 보는 데 특히 유용하다.

# 원본 자료

- 논문 PDF: [tau2-bench-2506.07982.pdf](/benchmarks/sources/tau2-bench-2506.07982.pdf)
- 원조 논문 PDF(계보): [tau-bench-2406.12045.pdf](/benchmarks/sources/tau-bench-2406.12045.pdf)
- 코드·데이터: https://github.com/sierra-research/tau2-bench
- 축 정의: [[radar-spec]] · 능력 영역: [[domains-index]] → Agentic Tool Use

# Citations

[1] [τ²-Bench: Evaluating Conversational Agents in a Dual-Control Environment](https://arxiv.org/abs/2506.07982)
[2] [τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains](https://arxiv.org/abs/2406.12045)
