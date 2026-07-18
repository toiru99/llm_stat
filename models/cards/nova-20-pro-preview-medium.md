---
type: Model
title: Nova 2.0 Pro Preview (medium)
creator: Amazon
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: 1.47
output_speed_tps: 122.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.4, z: 0.09, r: 51.3, estimated: false }  # 전문 지식
  reasoning: { s: 32.1, z: -0.08, r: 48.8, estimated: false }  # 추론
  coding: { s: 59.9, z: 0.57, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 42.2, z: 0.23, r: 53.4, estimated: false }  # 에이전트
  trust: { s: 10.6, z: -0.81, r: 37.9, estimated: false }  # 신뢰성
  multimodal: { s: 72.5, z: 0.04, r: 50.6, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.66, r: 59.9, estimated: false }  # 긴문맥
  instruction: { s: 94.4, z: 1.73, r: 76.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Nova 2.0 Pro Preview (medium)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.47/1M · 122.0 t/s · TTFT 11.53s · 256k ctx` · 가성비 15.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.3 | +0.09 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 48.8 | -0.08 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 58.6 | +0.57 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 53.4 | +0.23 | 실측 | [[gdpval]] 9.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 37.9 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 50.6 | +0.04 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 59.9 | +0.66 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 76.0 | +1.73 | 실측 | [[ifbench]] 79.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
