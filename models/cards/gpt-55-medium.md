---
type: Model
title: GPT-5.5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 56.9360342242284
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.9, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 68.1, z: 1.63, r: 74.5, estimated: false }  # 추론
  coding: { s: 81.3, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 77.6, z: 1.08, r: 66.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.9, z: 0.89, r: 63.4, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 82.6, z: 1.34, r: 70.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.5 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 56.9360342242284 t/s · TTFT 8.19900596732168s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 92.6263%×0.4, [[humanitys-last-exam]] 42.354%×0.3 |
| 추론 | 74.5 | +1.63 | 실측 | [[critpt]] 18.5714%×1.0, [[gpqa-diamond]] 92.6263%×1.0, [[humanitys-last-exam]] 42.354%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[scicode]] 54.5139%×1.0, [[terminal-bench]] 57.5758%×0.5 |
| 에이전트 | 66.2 | +1.08 | 실측 | [[gdpval]] 1242.11 Elo×1.0, [[tau2-bench]] 91.8129%×1.0, [[tau3-banking]] 29.8969%×1.0, [[terminal-bench]] 57.5758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.4 | +0.89 | 실측 | [[mmmu-pro]] 81.1561%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 83%×1.0 |
| 지시 따르기 | 70.1 | +1.34 | 실측 | [[ifbench]] 70.9524%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
