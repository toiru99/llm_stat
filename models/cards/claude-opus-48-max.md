---
type: Model
title: Claude Opus 4.8 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 84.7592017908195
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.2, z: 1.72, r: 75.8, estimated: false }  # 전문 지식
  reasoning: { s: 72.8, z: 1.87, r: 78.1, estimated: false }  # 추론
  coding: { s: 81.6, z: 1.37, r: 70.5, estimated: false }  # 코딩
  agentic: { s: 83.1, z: 1.27, r: 69.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 0.92, r: 63.7, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.83, r: 62.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.8 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Opus 4.8 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 84.7592017908195 t/s · TTFT 30.2832945453166s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 75.8 | +1.72 | 실측 | [[gpqa-diamond]] 92.0202%×0.4, [[humanitys-last-exam]] 48.6562%×0.3 |
| 추론 | 78.1 | +1.87 | 실측 | [[critpt]] 20.8571%×1.0, [[gpqa-diamond]] 92.0202%×1.0, [[humanitys-last-exam]] 48.6562%×1.0 |
| 코딩 | 70.5 | +1.37 | 실측 | [[scicode]] 54.3981%×1.0, [[terminal-bench]] 58.3333%×0.5 |
| 에이전트 | 69.0 | +1.27 | 실측 | [[gdpval]] 1462.1 Elo×1.0, [[tau2-bench]] 94.4444%×1.0, [[tau3-banking]] 34.2268%×1.0, [[terminal-bench]] 58.3333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.7 | +0.92 | 실측 | [[aa-lcr]] 77.6667%×1.0 |
| 지시 따르기 | 62.4 | +0.83 | 실측 | [[ifbench]] 62.2449%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
