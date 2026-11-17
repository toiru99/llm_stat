---
type: Model
title: Claude Opus 4.5 (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 59.71658218893386
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.1, z: 0.34, r: 55.1, estimated: false }  # 전문 지식
  reasoning: { s: 33.2, z: -0.11, r: 48.4, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.76, r: 61.4, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.04, r: 65.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.9, z: 0.24, r: 53.5, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.78, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.43, r: 43.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Opus 4.5 (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 59.71658218893386 t/s · TTFT 1.615303729639825s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.1 | +0.34 | 실측 | [[gpqa-diamond]] 81.010101010101%×0.4, [[humanitys-last-exam]] 13.1603336422614%×0.3 |
| 추론 | 48.4 | -0.11 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 81.010101010101%×1.0, [[humanitys-last-exam]] 13.1603336422614%×1.0 |
| 코딩 | 61.4 | +0.76 | 실측 | [[terminal-bench]] 40.9090909090909%×0.5 |
| 에이전트 | 65.6 | +1.04 | 실측 | [[tau2-bench]] 86.2573099415205%×1.0, [[terminal-bench]] 40.9090909090909%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.5 | +0.24 | 실측 | [[mmmu-pro]] 71.2138728323699%×1.0 |
| 긴문맥 | 61.8 | +0.78 | 실측 | [[aa-lcr]] 70.6666666666667%×1.0 |
| 지시 따르기 | 43.5 | -0.43 | 실측 | [[ifbench]] 42.9931972789116%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
