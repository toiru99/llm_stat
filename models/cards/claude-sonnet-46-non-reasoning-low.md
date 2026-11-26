---
type: Model
title: Claude Sonnet 4.6 (non-reasoning, low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 58.5000734720654
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 52.1, z: 0.26, r: 53.9, estimated: false }  # 전문 지식
  reasoning: { s: 32.4, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.79, r: 61.8, estimated: false }  # 코딩
  agentic: { s: 72.0, z: 0.88, r: 63.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.9, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 42.5, z: -0.33, r: 45.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (non-reasoning, low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Claude Sonnet 4.6 (non-reasoning, low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 58.5000734720654 t/s · TTFT 1.31147573163054s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.9 | +0.26 | 실측 | [[gpqa-diamond]] 79.697%×0.4, [[humanitys-last-exam]] 11.2141%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 79.697%×1.0, [[humanitys-last-exam]] 11.2141%×1.0 |
| 코딩 | 61.8 | +0.79 | 실측 | [[terminal-bench]] 42.4242%×0.5 |
| 에이전트 | 63.2 | +0.88 | 실측 | [[tau2-bench]] 78.9474%×1.0, [[terminal-bench]] 42.4242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.1908%×1.0 |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 69.3333%×1.0 |
| 지시 따르기 | 45.0 | -0.33 | 실측 | [[ifbench]] 42.381%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
