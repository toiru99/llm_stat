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
  knowledge: { s: 40.3, z: -0.04, r: 49.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.0, r: 50.0, estimated: false }  # 추론
  coding: { s: 39.8, z: -0.34, r: 44.8, estimated: false }  # 코딩
  agentic: { s: 37.4, z: 0.03, r: 50.5, estimated: false }  # 에이전트
  trust: { s: 15.1, z: -0.53, r: 42.0, estimated: false }  # 신뢰성
  multimodal: { s: 64.3, z: -0.38, r: 44.2, estimated: false }  # 멀티모달
  long_context: { s: 65.1, z: 0.44, r: 56.7, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.66, r: 59.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# Nova 2.0 Omni (low)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 32.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.3 | -0.04 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 70.0%×0.4 |
| 추론 | 50.0 | +-0.0 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0 |
| 코딩 | 44.8 | -0.34 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 50.5 | +0.03 | 실측 | [[tau2-bench]] 68.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 44.2 | -0.38 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 56.7 | +0.44 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 59.9 | +0.66 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
