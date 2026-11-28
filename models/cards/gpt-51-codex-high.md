---
type: Model
title: GPT-5.1 Codex (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 89.0390102873254
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.8, z: 0.87, r: 63.1, estimated: false }  # 전문 지식
  reasoning: { s: 45.9, z: 0.53, r: 58.0, estimated: false }  # 추론
  coding: { s: 52.9, z: 0.4, r: 56.0, estimated: false }  # 코딩
  agentic: { s: 68.3, z: 0.74, r: 61.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 77.3, z: 0.3, r: 54.5, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 81.3, z: 1.28, r: 69.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 Codex (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-5.1 Codex (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 89.0390102873254 t/s · TTFT 10.4888343490777s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 63.1 | +0.87 | 실측 | [[gpqa-diamond]] 85.9596%×0.4, [[humanitys-last-exam]] 25.7183%×0.3 |
| 추론 | 58.0 | +0.53 | 실측 | [[critpt]] 5.71429%×1.0, [[gpqa-diamond]] 85.9596%×1.0, [[humanitys-last-exam]] 25.7183%×1.0 |
| 코딩 | 56.0 | +0.4 | 실측 | [[terminal-bench]] 34.8485%×0.5 |
| 에이전트 | 61.2 | +0.74 | 실측 | [[tau2-bench]] 83.0409%×1.0, [[terminal-bench]] 34.8485%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.5 | +0.3 | 실측 | [[mmmu-pro]] 72.4855%×1.0 |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 69.3333%×1.0 |
| 지시 따르기 | 69.2 | +1.28 | 실측 | [[ifbench]] 70%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
