---
type: Model
title: Nova 2.0 Pro Preview (medium)
creator: Amazon
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: 1.4684
output_speed_tps: 115.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.6, z: -0.0, r: 50.0, estimated: false }  # 전문 지식
  reasoning: { s: 31.3, z: -0.17, r: 47.4, estimated: false }  # 추론
  coding: { s: 58.4, z: 0.47, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 47.8, z: 0.4, r: 56.1, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.82, r: 37.6, estimated: false }  # 신뢰성
  multimodal: { s: 70.4, z: -0.0, r: 49.9, estimated: false }  # 멀티모달
  long_context: { s: 69.9, z: 0.6, r: 59.0, estimated: false }  # 긴문맥
  instruction: { s: 94.4, z: 1.73, r: 75.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Nova 2.0 Pro Preview (medium)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.4684/1M · 115.0 t/s · TTFT 14.57s · 256k ctx` · 가성비 15.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.0 | +-0.0 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 47.4 | -0.17 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 57.1 | +0.47 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 56.1 | +0.4 | 실측 | [[gdpval]] 9.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 37.6 | -0.82 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 49.9 | +-0.0 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 59.0 | +0.6 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 75.9 | +1.73 | 실측 | [[ifbench]] 79.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
