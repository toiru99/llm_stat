---
type: Model
title: GPT-4o (Nov)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.55
output_speed_tps: 118.410962545025
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.2, z: -0.8, r: 37.9, estimated: false }  # 전문 지식
  reasoning: { s: 17.8, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 12.6, z: -0.96, r: 35.6, estimated: false }  # 코딩
  agentic: { s: 18.4, z: -1.01, r: 34.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.6, z: -0.06, r: 49.1, estimated: false }  # 긴문맥
  instruction: { s: 31.1, z: -0.8, r: 38.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Nov)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GPT-4o (Nov)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $2.55/1M · 118.410962545025 t/s · TTFT 1.85455978653426s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.9 | -0.8 | 실측 | [[gpqa-diamond]] 54.3434%×0.4, [[humanitys-last-exam]] 2.42%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 54.3434%×1.0, [[humanitys-last-exam]] 2.42%×1.0 |
| 코딩 | 35.6 | -0.96 | 실측 | [[terminal-bench]] 8.33333%×0.5 |
| 에이전트 | 34.8 | -1.01 | 실측 | [[gdpval]] -9.47 Elo×1.0, [[tau2-bench]] 25.1462%×1.0, [[terminal-bench]] 8.33333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.1 | -0.06 | 실측 | [[aa-lcr]] 49.3333%×1.0 |
| 지시 따르기 | 38.0 | -0.8 | 실측 | [[ifbench]] 34.2857%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
