---
type: Model
title: Solar Pro 3
creator: Upstage
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: 0.1005
output_speed_tps: 129.0
context_window: 128000
status: current
size_class: Medium
params_b: 102
is_reasoning: true
radar:
  knowledge: { s: 37.1, z: -0.2, r: 46.9, estimated: false }  # 전문 지식
  reasoning: { s: 30.4, z: -0.22, r: 46.8, estimated: false }  # 추론
  coding: { s: 31.8, z: -0.64, r: 40.4, estimated: false }  # 코딩
  agentic: { s: 29.5, z: -0.25, r: 46.2, estimated: false }  # 에이전트
  trust: { s: 12.6, z: -0.74, r: 38.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.5, z: -0.42, r: 43.6, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.23, r: 68.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Solar Pro 3

Upstage · Proprietary · Medium(102B) · 컨텍스트 128k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 129.0 t/s · TTFT 2.36s · 128k ctx` · 가성비 139.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.9 | -0.2 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.8 | -0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 40.4 | -0.64 | 실측 | [[scicode]] 25.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 46.2 | -0.25 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 86.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 38.9 | -0.74 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.6 | -0.42 | 실측 | [[aa-lcr]] 27.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
