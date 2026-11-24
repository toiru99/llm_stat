---
type: Model
title: GPT-5.5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 57.2813196832433
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.9, z: 1.66, r: 74.9, estimated: false }  # 전문 지식
  reasoning: { s: 75.9, z: 2.03, r: 80.4, estimated: false }  # 추론
  coding: { s: 84.2, z: 1.46, r: 71.8, estimated: false }  # 코딩
  agentic: { s: 83.1, z: 1.27, r: 69.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.8, z: 0.89, r: 63.3, estimated: false }  # 멀티모달
  long_context: { s: 95.1, z: 1.14, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 83.6, z: 1.38, r: 70.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 57.2813196832433 t/s · TTFT 17.7678500948722s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 74.9 | +1.66 | 실측 | [[gpqa-diamond]] 93.2323%×0.4, [[humanitys-last-exam]] 45.0417%×0.3 |
| 추론 | 80.4 | +2.03 | 실측 | [[critpt]] 25.4286%×1.0, [[gpqa-diamond]] 93.2323%×1.0, [[humanitys-last-exam]] 45.0417%×1.0 |
| 코딩 | 71.8 | +1.46 | 실측 | [[scicode]] 56.1343%×1.0, [[terminal-bench]] 59.8485%×0.5 |
| 에이전트 | 69.1 | +1.27 | 실측 | [[gdpval]] 1335.27 Elo×1.0, [[tau2-bench]] 92.9825%×1.0, [[tau3-banking]] 36.701%×1.0, [[terminal-bench]] 59.8485%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.3 | +0.89 | 실측 | [[mmmu-pro]] 81.0983%×1.0 |
| 긴문맥 | 67.2 | +1.14 | 실측 | [[aa-lcr]] 84.3333%×1.0 |
| 지시 따르기 | 70.7 | +1.38 | 실측 | [[ifbench]] 71.6327%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
