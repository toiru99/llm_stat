---
type: Model
title: Nova 2.0 Pro Preview (low)
creator: Amazon
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 2.125
output_speed_tps: 123.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 38.3, z: -0.23, r: 46.6, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.44, r: 43.3, estimated: false }  # 추론
  coding: { s: 25.8, z: -0.41, r: 43.8, estimated: false }  # 코딩
  agentic: { s: 24.5, z: -0.36, r: 44.7, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: 65.8, z: -0.32, r: 45.2, estimated: false }  # 멀티모달
  long_context: { s: 73.0, z: 0.6, r: 59.1, estimated: false }  # 긴문맥
  instruction: { s: 95.8, z: 1.77, r: 76.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Nova 2.0 Pro Preview (low)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.125/1M · 123.0 t/s · TTFT 9.32s · 256k ctx` · 가성비 6.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.6 | -0.23 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.3 | -0.44 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 43.8 | -0.41 | 실측 | [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 44.7 | -0.36 | 실측 | [[gdpval]] 436.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 45.2 | -0.32 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 59.1 | +0.6 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 76.5 | +1.77 | 실측 | [[ifbench]] 80.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
