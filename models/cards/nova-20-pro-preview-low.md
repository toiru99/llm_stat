---
type: Model
title: Nova 2.0 Pro Preview (low)
creator: Amazon
license: Proprietary
intelligence_index: 20.0
price_blended_usd_1m: 2.13
output_speed_tps: 119.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.2, z: -0.01, r: 49.9, estimated: false }  # 전문 지식
  reasoning: { s: 28.4, z: -0.27, r: 46.0, estimated: false }  # 추론
  coding: { s: 51.9, z: 0.25, r: 53.8, estimated: false }  # 코딩
  agentic: { s: 39.0, z: 0.11, r: 51.7, estimated: false }  # 에이전트
  trust: { s: 14.1, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: 69.6, z: -0.09, r: 48.7, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.98, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 95.8, z: 1.79, r: 76.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Nova 2.0 Pro Preview (low)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.13/1M · 119.0 t/s · TTFT 13.4s · 256k ctx` · 가성비 9.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.9 | -0.01 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 46.0 | -0.27 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 53.8 | +0.25 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 51.7 | +0.11 | 실측 | [[gdpval]] 7.0%×1.0, [[tau2-bench]] 91.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 48.7 | -0.09 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 64.8 | +0.98 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 76.8 | +1.79 | 실측 | [[ifbench]] 80.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
