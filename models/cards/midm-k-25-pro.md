---
type: Model
title: Mi:dm K 2.5 Pro
creator: Korea Telecom
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.3, z: -0.38, r: 44.3, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.43, r: 43.6, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.14, r: 32.8, estimated: false }  # 코딩
  agentic: { s: 45.5, z: 0.25, r: 53.8, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -1.04, r: 34.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.1, z: -1.26, r: 31.2, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.09, r: 48.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mi:dm K 2.5 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Mi:dm K 2.5 Pro

Korea Telecom · Proprietary · Small · 컨텍스트 128k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 43.6 | -0.43 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 32.8 | -1.14 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 53.8 | +0.25 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 34.4 | -1.04 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.2 | -1.26 | 실측 | [[aa-lcr]] 9.0%×1.0 |
| 지시 따르기 | 48.6 | -0.09 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
