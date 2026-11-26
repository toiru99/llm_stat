---
type: Model
title: GPT-5 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 86.2995722481559
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.3, z: 0.41, r: 56.2, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.09, r: 51.3, estimated: false }  # 코딩
  agentic: { s: 57.7, z: 0.37, r: 55.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.5, z: 0.05, r: 50.8, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.73, r: 61.0, estimated: false }  # 긴문맥
  instruction: { s: 82.9, z: 1.35, r: 70.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-5 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 86.2995722481559 t/s · TTFT 11.7200490748361s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 56.2 | +0.41 | 실측 | [[gpqa-diamond]] 80.303%×0.4, [[humanitys-last-exam]] 15.9407%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 80.303%×1.0, [[humanitys-last-exam]] 15.9407%×1.0 |
| 코딩 | 51.3 | +0.09 | 실측 | [[terminal-bench]] 28.7879%×0.5 |
| 에이전트 | 55.6 | +0.37 | 실측 | [[tau2-bench]] 71.0526%×1.0, [[terminal-bench]] 28.7879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 50.8 | +0.05 | 실측 | [[mmmu-pro]] 68.8439%×1.0 |
| 긴문맥 | 61.0 | +0.73 | 실측 | [[aa-lcr]] 72.3333%×1.0 |
| 지시 따르기 | 70.2 | +1.35 | 실측 | [[ifbench]] 71.1565%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
