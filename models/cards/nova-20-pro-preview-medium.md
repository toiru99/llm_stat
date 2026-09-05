---
type: Model
title: Nova 2.0 Pro Preview (medium)
creator: Amazon
license: Proprietary
intelligence_index: 16.0
price_blended_usd_1m: 1.4684
output_speed_tps: 119.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.4, z: -0.03, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 31.0, z: -0.2, r: 47.0, estimated: false }  # 추론
  coding: { s: 36.4, z: 0.15, r: 52.3, estimated: false }  # 코딩
  agentic: { s: 47.1, z: 0.37, r: 55.5, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 69.4, z: -0.04, r: 49.5, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.7, r: 60.5, estimated: false }  # 긴문맥
  instruction: { s: 94.4, z: 1.75, r: 76.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Nova 2.0 Pro Preview (medium)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **16.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.4684/1M · 119.0 t/s · TTFT 17.29s · 256k ctx` · 가성비 10.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.03 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 47.0 | -0.2 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 52.3 | +0.15 | 실측 | [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 55.5 | +0.37 | 실측 | [[gdpval]] 7.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 49.5 | -0.04 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 60.5 | +0.7 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 76.2 | +1.75 | 실측 | [[ifbench]] 79.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
