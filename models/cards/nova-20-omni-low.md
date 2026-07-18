---
type: Model
title: Nova 2.0 Omni (low)
creator: Amazon
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 0.52
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.5, z: -0.29, r: 45.6, estimated: false }  # 전문 지식
  reasoning: { s: 25.7, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 39.8, z: -0.27, r: 45.9, estimated: false }  # 코딩
  agentic: { s: 37.4, z: 0.04, r: 50.6, estimated: false }  # 에이전트
  trust: { s: 17.6, z: -0.48, r: 42.9, estimated: false }  # 신뢰성
  multimodal: { s: 65.2, z: -0.31, r: 45.4, estimated: false }  # 멀티모달
  long_context: { s: 67.1, z: 0.55, r: 58.2, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.74, r: 61.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Nova 2.0 Omni (low)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 32.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.6 | -0.29 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.9 | -0.27 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 50.6 | +0.04 | 실측 | [[tau2-bench]] 68.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 42.9 | -0.48 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 45.4 | -0.31 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 58.2 | +0.55 | 실측 | [[aa-lcr]] 51.0%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
