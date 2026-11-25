---
type: Model
title: GPT-5.6 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 97.9327434884154
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.3, z: 1.39, r: 70.8, estimated: false }  # 전문 지식
  reasoning: { s: 62.2, z: 1.34, r: 70.1, estimated: false }  # 추론
  coding: { s: 84.9, z: 1.48, r: 72.2, estimated: false }  # 코딩
  agentic: { s: 75.2, z: 0.99, r: 64.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.7, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 76.4, z: 1.08, r: 66.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-5.6 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 97.9327434884154 t/s · TTFT 2.73303477237933s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.8 | +1.39 | 실측 | [[gpqa-diamond]] 89.798%×0.4, [[humanitys-last-exam]] 39.3883%×0.3 |
| 추론 | 70.1 | +1.34 | 실측 | [[critpt]] 14.8571%×1.0, [[gpqa-diamond]] 89.798%×1.0, [[humanitys-last-exam]] 39.3883%×1.0 |
| 코딩 | 72.2 | +1.48 | 실측 | [[scicode]] 56.3657%×1.0, [[terminal-bench]] 60.6061%×0.5 |
| 에이전트 | 64.9 | +0.99 | 실측 | [[gdpval]] 1313.08 Elo×1.0, [[tau2-bench]] 76.0234%×1.0, [[tau3-banking]] 29.0722%×1.0, [[terminal-bench]] 60.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 80.9827%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 78%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 실측 | [[ifbench]] 66.5306%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
