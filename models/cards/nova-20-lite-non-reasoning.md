---
type: Model
title: Nova 2.0 Lite (Non-reasoning)
creator: Amazon
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: 0.52
output_speed_tps: 158.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.7, z: -0.68, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 20.8, z: -0.69, r: 39.7, estimated: false }  # 추론
  coding: { s: 29.3, z: -0.74, r: 39.0, estimated: false }  # 코딩
  agentic: { s: 36.6, z: -0.02, r: 49.7, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.57, r: 41.5, estimated: false }  # 신뢰성
  multimodal: { s: 48.6, z: -1.1, r: 33.5, estimated: false }  # 멀티모달
  long_context: { s: 21.7, z: -0.86, r: 37.1, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.5, r: 42.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Nova 2.0 Lite (Non-reasoning)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 158.0 t/s · TTFT 1.03s · 1M ctx` · 가성비 23.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.68 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 39.7 | -0.69 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 39.0 | -0.74 | 실측 | [[scicode]] 24.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 49.7 | -0.02 | 실측 | [[tau2-bench]] 62.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 41.5 | -0.57 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 33.5 | -1.1 | 실측 | [[mmmu-pro]] 49.0%×1.0 |
| 긴문맥 | 37.1 | -0.86 | 실측 | [[aa-lcr]] 18.0%×1.0 |
| 지시 따르기 | 42.5 | -0.5 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
