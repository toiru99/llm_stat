---
type: Model
title: GPT-5.1 Codex mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 144.6787968333049
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.5, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 35.5, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 50.6, z: 0.37, r: 55.5, estimated: false }  # 코딩
  agentic: { s: 57.0, z: 0.43, r: 56.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.9, z: 0.09, r: 51.3, estimated: false }  # 멀티모달
  long_context: { s: 75.2, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.03, r: 65.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 Codex mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.1 Codex mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 144.6787968333049 t/s · TTFT 14.244334706317524s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[gpqa-diamond]] 81.31313131313131%×0.4, [[humanitys-last-exam]] 18.4893419833179%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.31313131313131%×1.0, [[humanitys-last-exam]] 18.4893419833179%×1.0 |
| 코딩 | 55.5 | +0.37 | 실측 | [[terminal-bench]] 33.3333333333333%×0.5 |
| 에이전트 | 56.5 | +0.43 | 실측 | [[tau2-bench]] 62.8654970760234%×1.0, [[terminal-bench]] 33.3333333333333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.3 | +0.09 | 실측 | [[mmmu-pro]] 69.0173410404624%×1.0 |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 66.6666666666667%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 실측 | [[ifbench]] 67.891156462585%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
