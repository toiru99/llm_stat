---
type: Model
title: Nova 2.0 Lite (low)
creator: Amazon
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 0.52
output_speed_tps: 158.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.9, z: -0.34, r: 44.9, estimated: false }  # 전문 지식
  reasoning: { s: 25.4, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 38.7, z: -0.37, r: 44.4, estimated: false }  # 코딩
  agentic: { s: 39.4, z: 0.1, r: 51.5, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.61, r: 40.9, estimated: false }  # 신뢰성
  multimodal: { s: 61.4, z: -0.47, r: 43.0, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.52, r: 57.8, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.7, r: 60.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Nova 2.0 Lite (low)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 158.0 t/s · TTFT 8.89s · 1M ctx` · 가성비 34.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.9 | -0.34 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.4 | -0.37 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 51.5 | +0.1 | 실측 | [[tau2-bench]] 72.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 40.9 | -0.61 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 43.0 | -0.47 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 57.8 | +0.52 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 60.6 | +0.7 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
