---
type: Model
title: Nova 2.0 Pro Preview (medium)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.4684
output_speed_tps: 98.47935698835272
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.3, z: 0.15, r: 52.3, estimated: false }  # 전문 지식
  reasoning: { s: 30.3, z: -0.25, r: 46.2, estimated: false }  # 추론
  coding: { s: 36.8, z: -0.1, r: 48.5, estimated: false }  # 코딩
  agentic: { s: 56.3, z: 0.41, r: 56.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 66.9, z: -0.22, r: 46.7, estimated: false }  # 멀티모달
  long_context: { s: 72.2, z: 0.56, r: 58.4, estimated: false }  # 긴문맥
  instruction: { s: 94.0, z: 1.69, r: 75.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Nova 2.0 Pro Preview (medium)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.4684/1M · 98.47935698835272 t/s · TTFT 16.337145474383423s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.3 | +0.15 | 실측 | [[gpqa-diamond]] 78.4848484848485%×0.4, [[humanitys-last-exam]] 9.40685820203892%×0.3 |
| 추론 | 46.2 | -0.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.4848484848485%×1.0, [[humanitys-last-exam]] 9.40685820203892%×1.0 |
| 코딩 | 48.5 | -0.1 | 실측 | [[terminal-bench]] 24.2424242424242%×0.5 |
| 에이전트 | 56.1 | +0.41 | 실측 | [[gdpval]] 476.82%×1.0, [[tau2-bench]] 92.6900584795322%×1.0, [[terminal-bench]] 24.2424242424242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.7 | -0.22 | 실측 | [[mmmu-pro]] 64.5086705202312%×1.0 |
| 긴문맥 | 58.4 | +0.56 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 75.3 | +1.69 | 실측 | [[ifbench]] 79.0476190476191%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
