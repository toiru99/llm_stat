---
type: Model
title: Claude Opus 4.5 (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 58.4237016868996
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.1, z: 0.33, r: 54.9, estimated: false }  # 전문 지식
  reasoning: { s: 33.2, z: -0.12, r: 48.3, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.75, r: 61.2, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.03, r: 65.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.6, z: 0.22, r: 53.2, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.77, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Claude Opus 4.5 (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 58.4237016868996 t/s · TTFT 1.46596495224167s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.9 | +0.33 | 실측 | [[gpqa-diamond]] 81.010101010101%×0.4, [[humanitys-last-exam]] 13.1603336422614%×0.3 |
| 추론 | 48.3 | -0.12 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 81.010101010101%×1.0, [[humanitys-last-exam]] 13.1603336422614%×1.0 |
| 코딩 | 61.2 | +0.75 | 실측 | [[terminal-bench]] 40.9090909090909%×0.5 |
| 에이전트 | 65.4 | +1.03 | 실측 | [[tau2-bench]] 86.2573099415205%×1.0, [[terminal-bench]] 40.9090909090909%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.2 | +0.22 | 실측 | [[mmmu-pro]] 71.2138728323699%×1.0 |
| 긴문맥 | 61.6 | +0.77 | 실측 | [[aa-lcr]] 70.6666666666667%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 42.9931972789116%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
