---
type: Model
title: Nova 2.0 Lite (medium)
creator: Amazon
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 0.52
output_speed_tps: 151.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 38.1, z: -0.11, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.09, r: 48.6, estimated: false }  # 추론
  coding: { s: 49.7, z: 0.16, r: 52.4, estimated: false }  # 코딩
  agentic: { s: 51.3, z: 0.59, r: 58.8, estimated: false }  # 에이전트
  trust: { s: 10.6, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 69.6, z: -0.09, r: 48.7, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.83, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.15, r: 67.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-12
timestamp: 2026-07-12T00:00:00Z
---

# Nova 2.0 Lite (medium)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 151.0 t/s · TTFT 18.3s · 1M ctx` · 가성비 36.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.11 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 48.6 | -0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 52.4 | +0.16 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 58.8 | +0.59 | 실측 | [[tau2-bench]] 76.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 48.7 | -0.09 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 62.4 | +0.83 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 67.2 | +1.15 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
