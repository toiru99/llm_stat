---
type: Model
title: Mi:dm K 2.5 Pro
creator: Korea Telecom
license: Proprietary
intelligence_index: 16.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 32
is_reasoning: true
radar:
  knowledge: { s: 34.9, z: -0.3, r: 45.5, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.31, r: 45.3, estimated: false }  # 추론
  coding: { s: 37.7, z: -0.39, r: 44.1, estimated: false }  # 코딩
  agentic: { s: 45.5, z: 0.35, r: 55.3, estimated: false }  # 에이전트
  trust: { s: 11.5, z: -0.78, r: 38.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.8, z: -1.11, r: 33.3, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.04, r: 49.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mi:dm K 2.5 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Mi:dm K 2.5 Pro

Korea Telecom · Proprietary · Small(32B) · 컨텍스트 128k · 종합지능 **16.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 신뢰성, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.5 | -0.3 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 45.3 | -0.31 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 44.1 | -0.39 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 55.3 | +0.35 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 38.2 | -0.78 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.3 | -1.11 | 실측 | [[aa-lcr]] 9.0%×1.0 |
| 지시 따르기 | 49.4 | -0.04 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
