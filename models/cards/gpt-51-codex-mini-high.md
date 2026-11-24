---
type: Model
title: GPT-5.1 Codex mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 141.843171319926
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.5, z: 0.52, r: 57.8, estimated: false }  # 전문 지식
  reasoning: { s: 35.5, z: 0.02, r: 50.3, estimated: false }  # 추론
  coding: { s: 50.6, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 57.0, z: 0.35, r: 55.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.7, z: 0.07, r: 51.0, estimated: false }  # 멀티모달
  long_context: { s: 75.2, z: 0.53, r: 58.0, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.16, r: 67.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 Codex mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.1 Codex mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 141.843171319926 t/s · TTFT 8.15656409461662s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.8 | +0.52 | 실측 | [[gpqa-diamond]] 81.3131%×0.4, [[humanitys-last-exam]] 18.4893%×0.3 |
| 추론 | 50.3 | +0.02 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 81.3131%×1.0, [[humanitys-last-exam]] 18.4893%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[terminal-bench]] 33.3333%×0.5 |
| 에이전트 | 55.2 | +0.35 | 실측 | [[tau2-bench]] 62.8655%×1.0, [[terminal-bench]] 33.3333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.0 | +0.07 | 실측 | [[mmmu-pro]] 69.0173%×1.0 |
| 긴문맥 | 58.0 | +0.53 | 실측 | [[aa-lcr]] 66.6667%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 실측 | [[ifbench]] 67.8912%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
