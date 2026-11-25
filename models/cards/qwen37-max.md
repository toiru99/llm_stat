---
type: Model
title: Qwen3.7 Max
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.6
output_speed_tps: 158.356697916989
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.6, z: 1.5, r: 72.5, estimated: false }  # 전문 지식
  reasoning: { s: 62.3, z: 1.35, r: 70.2, estimated: false }  # 추론
  coding: { s: 72.4, z: 1.06, r: 65.9, estimated: false }  # 코딩
  agentic: { s: 65.7, z: 0.66, r: 59.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 96.1, z: 1.9, r: 78.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3.7 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $2.5 · 출력 $7.5 · 혼합 $1.6/1M · 158.356697916989 t/s · TTFT 2.56070831850837s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 72.5 | +1.5 | 실측 | [[gpqa-diamond]] 92.3232%×0.4, [[humanitys-last-exam]] 40.5005%×0.3 |
| 추론 | 70.2 | +1.35 | 실측 | [[critpt]] 13.4286%×1.0, [[gpqa-diamond]] 92.3232%×1.0, [[humanitys-last-exam]] 40.5005%×1.0 |
| 코딩 | 65.9 | +1.06 | 실측 | [[scicode]] 49.537%×1.0, [[terminal-bench]] 50.7576%×0.5 |
| 에이전트 | 59.9 | +0.66 | 실측 | [[gdpval]] 1134.3 Elo×1.0, [[tau2-bench]] 94.7368%×1.0, [[tau3-banking]] 11.7526%×1.0, [[terminal-bench]] 50.7576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 79%×1.0 |
| 지시 따르기 | 78.5 | +1.9 | 실측 | [[ifbench]] 80.5442%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
