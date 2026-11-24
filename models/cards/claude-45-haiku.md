---
type: Model
title: Claude 4.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 7.43033851624488
price_blended_usd_1m: 0.77
output_speed_tps: 99.0912108727895
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.4, z: -0.17, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 26.4, z: -0.44, r: 43.4, estimated: false }  # 추론
  coding: { s: 52.5, z: 0.39, r: 55.8, estimated: false }  # 코딩
  agentic: { s: 41.2, z: -0.21, r: 46.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.8, z: -0.65, r: 40.3, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.36, r: 55.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude 4.5 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **7.43033851624488** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · 99.0912108727895 t/s · TTFT 15.8091830568583s · 200k ctx` · 가성비 9.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.17 | 실측 | [[gpqa-diamond]] 67.1717%×0.4, [[humanitys-last-exam]] 10.38%×0.3 |
| 추론 | 43.4 | -0.44 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 67.1717%×1.0, [[humanitys-last-exam]] 10.38%×1.0 |
| 코딩 | 55.8 | +0.39 | 실측 | [[scicode]] 42.2454%×1.0, [[terminal-bench]] 27.2727%×0.5 |
| 에이전트 | 46.9 | -0.21 | 실측 | [[gdpval]] 739.31 Elo×1.0, [[tau2-bench]] 54.6784%×1.0, [[tau3-banking]] 9.27835%×1.0, [[terminal-bench]] 27.2727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 40.3 | -0.65 | 실측 | [[mmmu-pro]] 58.5549%×1.0 |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 74.3333%×1.0 |
| 지시 따르기 | 55.5 | +0.36 | 실측 | [[ifbench]] 54.2857%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
