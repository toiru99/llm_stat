---
type: Model
title: GPT-5.5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 51.5143603020107
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.2, z: 1.23, r: 68.5, estimated: false }  # 전문 지식
  reasoning: { s: 53.2, z: 0.89, r: 63.4, estimated: false }  # 추론
  coding: { s: 79.3, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 69.1, z: 0.78, r: 61.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.0, z: 0.75, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 91.4, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 73.4, z: 0.95, r: 64.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.5 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 51.5143603020107 t/s · TTFT 2.57233630250443s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 68.5 | +1.23 | 실측 | [[gpqa-diamond]] 91.0101%×0.4, [[humanitys-last-exam]] 32.6691%×0.3 |
| 추론 | 63.4 | +0.89 | 실측 | [[critpt]] 8%×1.0, [[gpqa-diamond]] 91.0101%×1.0, [[humanitys-last-exam]] 32.6691%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[terminal-bench]] 52.2727%×0.5 |
| 에이전트 | 61.6 | +0.78 | 실측 | [[gdpval]] 1052.22 Elo×1.0, [[tau2-bench]] 83.9181%×1.0, [[tau3-banking]] 24.9485%×1.0, [[terminal-bench]] 52.2727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.2 | +0.75 | 실측 | [[mmmu-pro]] 79.0173%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 81%×1.0 |
| 지시 따르기 | 64.3 | +0.95 | 실측 | [[ifbench]] 64.3537%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
