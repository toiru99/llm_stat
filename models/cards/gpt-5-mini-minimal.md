---
type: Model
title: GPT-5 mini (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 69.8244561312995
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.3, z: -0.27, r: 46.0, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.53, r: 42.1, estimated: false }  # 추론
  coding: { s: 21.8, z: -0.65, r: 40.3, estimated: false }  # 코딩
  agentic: { s: 27.0, z: -0.71, r: 39.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.5, z: -0.66, r: 40.1, estimated: false }  # 멀티모달
  long_context: { s: 44.4, z: -0.41, r: 43.9, estimated: false }  # 긴문맥
  instruction: { s: 47.0, z: -0.14, r: 47.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-5 mini (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 69.8244561312995 t/s · TTFT 2.01329696268669s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.0 | -0.27 | 실측 | [[gpqa-diamond]] 68.6869%×0.4, [[humanitys-last-exam]] 5.05097%×0.3 |
| 추론 | 42.1 | -0.53 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 68.6869%×1.0, [[humanitys-last-exam]] 5.05097%×1.0 |
| 코딩 | 40.3 | -0.65 | 실측 | [[terminal-bench]] 14.3939%×0.5 |
| 에이전트 | 39.4 | -0.71 | 실측 | [[tau2-bench]] 31.8713%×1.0, [[terminal-bench]] 14.3939%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 40.1 | -0.66 | 실측 | [[mmmu-pro]] 58.3815%×1.0 |
| 긴문맥 | 43.9 | -0.41 | 실측 | [[aa-lcr]] 39.3333%×1.0 |
| 지시 따르기 | 47.8 | -0.14 | 실측 | [[ifbench]] 45.5782%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
