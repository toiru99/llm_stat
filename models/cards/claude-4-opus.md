---
type: Model
title: Claude 4 Opus
creator: Anthropic
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 11.55
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.6, z: 0.66, r: 59.9, estimated: false }  # 전문 지식
  reasoning: { s: 50.2, z: 0.73, r: 60.9, estimated: false }  # 추론
  coding: { s: 47.0, z: 0.52, r: 57.9, estimated: false }  # 코딩
  agentic: { s: 60.4, z: 0.88, r: 63.1, estimated: false }  # 에이전트
  trust: { s: 46.8, z: 1.06, r: 65.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.1, z: 0.95, r: 64.3, estimated: true }  # 긴문맥
  instruction: { s: 59.2, z: 0.28, r: 54.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Opus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude 4 Opus

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $11.55/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 2.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.9 | +0.66 | 실측 | [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 60.9 | +0.73 | 실측 | [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 57.9 | +0.52 | 실측 | [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 63.1 | +0.88 | 실측 | [[tau2-bench]] 73.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 65.9 | +1.06 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.3 | +0.95 | 추정 | (추정) |
| 지시 따르기 | 54.1 | +0.28 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
