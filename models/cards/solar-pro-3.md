---
type: Model
title: Solar Pro 3
creator: Upstage
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: 0.1005
output_speed_tps: 156.0
context_window: 128000
status: current
size_class: Medium
params_b: 102
is_reasoning: true
radar:
  knowledge: { s: 37.3, z: -0.17, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 29.9, z: -0.23, r: 46.5, estimated: false }  # 추론
  coding: { s: 31.8, z: -0.66, r: 40.1, estimated: false }  # 코딩
  agentic: { s: 29.2, z: -0.3, r: 45.5, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 37.3, z: -0.37, r: 44.5, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.29, r: 69.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Solar Pro 3

Upstage · Proprietary · Medium(102B) · 컨텍스트 128k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 156.0 t/s · TTFT 2.83s · 128k ctx` · 가성비 139.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.17 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.5 | -0.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 40.1 | -0.66 | 실측 | [[scicode]] 25.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 45.5 | -0.3 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 86.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.5 | -0.37 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 69.4 | +1.29 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
