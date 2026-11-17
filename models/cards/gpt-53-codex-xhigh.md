---
type: Model
title: GPT-5.3 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: 93.37909317786426
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.3, z: 1.51, r: 72.6, estimated: false }  # 전문 지식
  reasoning: { s: 66.1, z: 1.52, r: 72.8, estimated: false }  # 추론
  coding: { s: 80.5, z: 1.39, r: 70.8, estimated: false }  # 코딩
  agentic: { s: 83.6, z: 1.35, r: 70.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.6, z: 0.73, r: 61.0, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 88.8, z: 1.47, r: 72.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.3 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.3 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 93.37909317786426 t/s · TTFT 37.221145408003586s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.6 | +1.51 | 실측 | [[gpqa-diamond]] 91.5151515151515%×0.4, [[humanitys-last-exam]] 42.493049119555096%×0.3 |
| 추론 | 72.8 | +1.52 | 실측 | [[critpt]] 16.8571428571429%×1.0, [[gpqa-diamond]] 91.5151515151515%×1.0, [[humanitys-last-exam]] 42.493049119555096%×1.0 |
| 코딩 | 70.8 | +1.39 | 실측 | [[terminal-bench]] 53.030303030303%×0.5 |
| 에이전트 | 70.3 | +1.35 | 실측 | [[tau2-bench]] 85.9649122807018%×1.0, [[terminal-bench]] 53.030303030303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.0 | +0.73 | 실측 | [[mmmu-pro]] 78.4971098265896%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 83.3333333333333%×1.0 |
| 지시 따르기 | 72.1 | +1.47 | 실측 | [[ifbench]] 75.3741496598639%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
