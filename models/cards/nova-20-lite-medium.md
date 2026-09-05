---
type: Model
title: Nova 2.0 Lite (medium)
creator: Amazon
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 0.52
output_speed_tps: 157.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.6, z: -0.21, r: 46.9, estimated: false }  # 전문 지식
  reasoning: { s: 30.6, z: -0.22, r: 46.8, estimated: false }  # 추론
  coding: { s: 25.8, z: -0.22, r: 46.7, estimated: false }  # 코딩
  agentic: { s: 51.3, z: 0.53, r: 57.9, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: 66.7, z: -0.17, r: 47.4, estimated: false }  # 멀티모달
  long_context: { s: 67.4, z: 0.56, r: 58.5, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.16, r: 67.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Nova 2.0 Lite (medium)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 157.0 t/s · TTFT 18.73s · 1M ctx` · 가성비 25.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.9 | -0.21 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.8 | -0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 46.7 | -0.22 | 실측 | [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 57.9 | +0.53 | 실측 | [[tau2-bench]] 76.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 47.4 | -0.17 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 58.5 | +0.56 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
