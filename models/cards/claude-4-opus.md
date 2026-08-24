---
type: Model
title: Claude 4 Opus
creator: Anthropic
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: 11.55
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.8, z: 0.68, r: 60.2, estimated: false }  # 전문 지식
  reasoning: { s: 51.4, z: 0.76, r: 61.5, estimated: false }  # 추론
  coding: { s: 60.1, z: 0.47, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 60.4, z: 0.9, r: 63.4, estimated: false }  # 에이전트
  trust: { s: 13.7, z: -0.62, r: 40.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 43.4, z: -0.22, r: 46.7, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.19, r: 52.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Opus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Claude 4 Opus

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **32.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $11.55/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 2.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.2 | +0.68 | 실측 | [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 61.5 | +0.76 | 실측 | [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 57.0 | +0.47 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 63.4 | +0.9 | 실측 | [[tau2-bench]] 73.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 40.8 | -0.62 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.7 | -0.22 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 52.9 | +0.19 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
