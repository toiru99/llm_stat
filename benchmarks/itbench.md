---
type: Benchmark
title: ITBench
aa_metric: ITBench-AA
column: "ITBench"
domain: Kubernetes Incident RCA
category: 에이전트
# 레이더 기여 (SSOT — build_cards.py가 읽음)
axes:
  - { axis: agentic, weight: 1.0 }   # 주 기여: 실제 IT 운영(SRE/DevOps) 에이전트 수행력
attributes:
  modality: text
  task_type: 에이전트 다단계 IT 자동화(인시던트 진단·완화)
  scoring: pass@1 (+ NTAM 토폴로지 인지 RCA 점수·MTTD/MTTR·비용 근접도)
  scale: "0–100%"
  personas: [SRE, CISO, FinOps]
  n_scenarios_full: 94
  scenario_split: "SRE 42 · CISO 50 · FinOps 2"
  aa_variant: "SRE K8s 집중 · 59 SRE 태스크(공개 40 + 비공개 19)"
  coverage: "매우 낮음(~11% 공개, 11/94 시나리오만 오픈)"
  environment: 실제 테스트베드(Kubernetes + OpenTelemetry 관측 스택)
  paper_sota: "SRE 13.8% · CISO 25.2% · FinOps 0% (논문 베이스라인)"
  saturation: 매우 낮음(프런티어도 대부분 미해결)
  contamination_risk: 낮음(라이브 환경·상호작용 평가)
  higher_is_better: true
org: IBM Research / UIUC
year: 2025
resource: https://arxiv.org/abs/2502.05352
paper: /benchmarks/sources/itbench-2502.05352.pdf
tags: [agentic, devops, sre, kubernetes, rca, ciso, finops]
timestamp: 2026-06-23T00:00:00Z
---

# 무엇을 측정하나

AI 에이전트가 **실제 IT 자동화 업무**를 얼마나 자율적으로 수행하는지를 측정한다. 단순 질의응답이 아니라, 에이전트가 살아있는 테스트베드(Kubernetes 클러스터 + 관측 스택)에 접속해 **도구를 호출하고 시스템 상태를 관측하며 여러 단계에 걸쳐 문제를 해결**하는 실무 수행력을 본다.

ITBench는 세 가지 IT 페르소나를 대상으로 한다.

- **SRE (Site Reliability Engineering)**: 가용성·복원력. 핵심 과제는 **Kubernetes 인시던트 근본원인 분석(RCA)** — 경보·이벤트·트레이스·메트릭·로그·토폴로지로 구성된 인시던트 스냅샷을 읽고, 장애 전파 사슬을 따라가 근본원인 엔티티를 진단하고(Diagnosis), 나아가 장애를 완화(Mitigation)한다.
- **CISO (Compliance & Security)**: 규제 준수·보안. CIS 벤치마크 기반으로 컴플라이언스 정책(Kyverno/OPA Rego)을 생성·평가하고, 잘못 구성된 통제를 탐지·보고한다.
- **FinOps (Financial Operations)**: 클라우드 비용 효율. 비용 경보의 원인을 진단하고 비효율을 완화한다.

AA가 추적하는 핵심은 이 중 **SRE의 Kubernetes RCA** 능력이다(아래 "AA 변형" 참조).

# 과제 형식 / 예시

- 각 시나리오는 튜플 `<M, E, T, D>` 로 정의된다 — **메타데이터(M)** + **운영 환경 테스트베드(E)** + **트리거 이벤트(T)** + **목표 결과(D)**.
- 환경은 실제 시스템: OpenTelemetry Astronomy Shop 데모 앱을 올린 Kubernetes 클러스터에 Grafana·Loki·Jaeger·Prometheus 관측 스택을 결합한다.
- 에이전트–환경은 **POMDP(부분관측 마르코프 결정과정)** 로 모델링된다. 에이전트가 행동(`a_t`)을 내면 환경 상태(`s_t`)가 바뀌고, 에이전트는 부분 관측(`o_t`)만 받는다. NL2Kubectl·NL2Traces·NL2Logs·NL2Metrics 같은 자연어→도구 변환 툴박스로 환경과 상호작용한다.
- 시나리오 예: SRE의 "CacheFailure(지수적으로 커지는 캐시로 메모리 누수 유발)", "HighCPU", "CorruptImage(잘못된 Docker 이미지 배포)"; CISO의 "New K8s CIS-benchmarks on Kyverno"; FinOps의 "AutoscalerMisconfiguration(HPA 임계값 오설정으로 과도한 파드 생성)".
- 트리거 예: 캐시 장애로 인한 "service order-management의 높은 오류율".

# 채점 방식

태스크별로 **독립 채점**하며, 잘 정의된 메트릭으로 측정한다(Table 3 기준).

- **SRE — Diagnosis**: pass@1, **Fault Localization**, **Fault Propagation Chain**, **MTTD(평균 진단 시간)**. RCA 품질은 시스템·앱 토폴로지를 활용한 **NTAM(Normalized Topology-Aware Metric, 0~1)** 으로 근본원인·장애 전파 사슬의 정확도를 잰다.
- **SRE — Mitigation**: pass@1(경보 해소 여부), **MTTR(평균 복구 시간)**.
- **CISO**: Collect evidence는 pass@1, Scan assessment posture는 pass@1 + Time to Process.
- **FinOps**: Identify inefficiency는 pass@1, Mitigate inefficiency는 pass@1 + Hourly infra cost + Efficiency(최적 CPU/메모리 비용 근접도).
- **부분 점수(partial scoring)** 를 의도적으로 제공해, 에이전트 추론 과정의 여러 단계에 건설적 피드백을 준다. 평가자는 시나리오 종료 시 최종 시스템 상태를 사전 정의된 ground truth와 대조한다.

# 점수 해석 (높음 / 낮음)

- **높음** = 실제 인프라 장애를 보고 원인을 추적·진단하고(때로 완화까지) 자율적으로 끝내는 **운영(SRE/DevOps) 에이전트 능력**이 강함. 복잡한 시스템 디버깅·운영 자동화에 직결.
- **낮음** = 단발 질의엔 강해도, 관측 데이터를 가로질러 다단계로 추론하며 도구를 운용하는 실무 수행에서 무너짐.
- 라이브 환경 특성상 동일 시나리오라도 실행마다 결과가 흔들린다(아래 "한계" 비결정성 항목).

# 난이도 · 포화 · 현 SOTA

- 논문 베이스라인(SOTA 에이전트 기준): **SRE 13.8% / CISO 25.2% / FinOps 0%** 시나리오 해결. 즉 최신 모델로도 대부분의 실제 IT 과제를 풀지 못한다.
- SRE Diagnosis에서 GPT-4o가 pass@1 **13.81%** 로 최고. 단, **트레이스 데이터를 제거하면 9.52%로 급락**하고 완화는 2.86%까지 떨어진다 → 시스템 관측 가능성(observability)이 성능에 결정적.
- 난이도는 시나리오 복잡도(Easy/Medium/Hard)에 따라 명확히 떨어진다. GPT-4o조차 Hard SRE 시나리오는 5.0%만 진단, Hard FinOps는 어떤 모델도 진단·완화 실패. **어떤 모델도 Hard SRE 시나리오를 완화하지 못했다.**
- 한 줄 요약: **현존하는 가장 포화되지 않은(unsaturated) 에이전트 벤치마크 중 하나** — 상위권 변별력이 매우 크다.

# 한계 · 주의 (커버리지)

- **공개 커버리지가 매우 낮다(~11%)**: 전체 94개 시나리오 중 **11개만 오픈소스로 공개**(github.com/IBM/itbench-sample-scenarios)되고, 나머지는 평가용으로 비공개 유지된다. 외부에서 전체를 재현·검증하기 어렵다는 뜻 → 점수 해석 시 주의.
- **FinOps 시나리오 희소**: 단 2개뿐(표준 벤치마크 부재 때문). FinOps 0% 결과는 표본이 극히 작다는 점을 감안해야 한다.
- **라이브 환경 비결정성**: 실시간 텔레메트리의 미세 변화와 LLM 토큰 생성 변동으로, GPT-4o조차 같은 시나리오를 10회 중 일부 실행에서만 진단/완화한다. 단일 실행 점수는 신뢰 구간을 넓게 봐야 한다.
- **관측 가능성 의존**: 트레이스 유무가 성능을 좌우 → 점수는 모델 능력뿐 아니라 제공된 관측 데이터 품질에도 민감.
- **오염 위험은 낮음**: 정적 문제 세트가 아니라 환경과 상호작용하는 라이브 평가라 학습 데이터 유입 영향이 작다.

# 다른 벤치마크와의 관계

- [[terminal-bench]] Terminal-Bench — 터미널/CLI에서 다단계 실무를 수행하는 에이전트 능력. ITBench가 "운영 인시던트 RCA"라면 Terminal-Bench는 "범용 터미널 작업"(에이전트 축 동반).
- [[tau2-bench]] · [[tau3-banking]] τ-bench 계열 — 도구 사용·고객 응대형 에이전트(에이전트 축 동반). ITBench는 인프라 운영에 특화.
- [[apex-agents]] · [[gdpval]] — 폭넓은 에이전트/직무 수행(에이전트 축 동반).
- 선행 IT 벤치마크 대비 차별점(Table 1): TrainTicket(22, 진단만)·AIOpsLab(10)·InsightBench(100, 합성 tabular)·TSB-AD(40, 합성 이상탐지)·CIS(정보 제공만)와 달리, ITBench는 **해결 가능(resolvable) + 자동 평가 + 실제 환경 + 검증된 리더보드**를 모두 갖춘 첫 프레임워크. SWE-Bench가 코드 수정에 끼친 영향을 IT 운영에서 노리는 설계.

# 레이더 기여 근거

- **agentic (1.0)**: 본질이 라이브 환경에서 도구를 호출하며 다단계 IT 운영 과제를 자율 수행하는 것 → 에이전트 축에 **단독·주 기여**. 지식/추론보다 "실무를 끝까지 수행하는가"를 직접 측정하므로 다른 축에는 분산하지 않는다.

# 한국 · 앨런 관점

DevOps·SRE 자동화는 국내 기업에서도 운영 비용·장애 대응의 핵심 영역이다. ITBench 점수는 "장애가 났을 때 AI 에이전트에게 1차 진단·완화를 맡길 수 있는가"를 가늠하는 가장 현실적인 지표 중 하나다. 점수가 전반적으로 낮다는 사실 자체가, 운영 자동화 에이전트가 아직 사람 SRE를 대체하기엔 이르고 **휴먼인더루프가 필수**임을 보여준다 — 도입 기대치를 현실화하는 데 유용.

# 원본 자료

- 논문 PDF: [itbench-2502.05352.pdf](/benchmarks/sources/itbench-2502.05352.pdf)
- 공개 시나리오(11/94): github.com/IBM/itbench-sample-scenarios
- 베이스라인 에이전트: github.com/IBM/itbench-sre-agent · github.com/IBM/itbench-ciso-caa-agent
- 축 정의: [[radar-spec]] · 능력 영역: [[domains-index]] → Kubernetes Incident RCA

# Citations

[1] [ITBench: Evaluating AI Agents across Diverse Real-World IT Automation Tasks](https://arxiv.org/abs/2502.05352)
