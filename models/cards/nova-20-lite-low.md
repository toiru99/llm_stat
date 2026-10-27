---
type: Model
title: Nova 2.0 Lite (low)
creator: Amazon
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: 0.52
output_speed_tps: 181.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.1, z: -0.46, r: 43.0, estimated: false }  # 전문 지식
  reasoning: { s: 24.9, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 6.1, z: -1.08, r: 33.8, estimated: false }  # 코딩
  agentic: { s: 6.1, z: -0.99, r: 35.1, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.72, r: 39.2, estimated: false }  # 신뢰성
  multimodal: { s: 58.9, z: -0.66, r: 40.0, estimated: false }  # 멀티모달
  long_context: { s: 60.7, z: 0.23, r: 53.5, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.62, r: 59.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Nova 2.0 Lite (low)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 181.0 t/s · TTFT 9.76s · 1M ctx` · 가성비 23.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.0 | -0.46 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.8 | -1.08 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 35.1 | -0.99 | 실측 | [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 39.2 | -0.72 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 40.0 | -0.66 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 53.5 | +0.23 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 59.3 | +0.62 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
