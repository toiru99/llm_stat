---
type: Model
title: Claude 4 Opus
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 11.55
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.7, z: 0.27, r: 54.1, estimated: false }  # 전문 지식
  reasoning: { s: 48.1, z: 0.63, r: 59.4, estimated: false }  # 추론
  coding: { s: 47.1, z: 0.25, r: 53.8, estimated: false }  # 코딩
  agentic: { s: 60.6, z: 0.55, r: 58.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.74, r: 61.1, estimated: false }  # 긴문맥
  instruction: { s: 58.5, z: 0.2, r: 53.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Opus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude 4 Opus

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $11.55/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.1 | +0.27 | 실측 | [[gpqa-diamond]] 79.5959595959596%×0.4, [[humanitys-last-exam]] 12.3262279888786%×0.3 |
| 추론 | 59.4 | +0.63 | 실측 | [[gpqa-diamond]] 79.5959595959596%×1.0, [[humanitys-last-exam]] 12.3262279888786%×1.0 |
| 코딩 | 53.8 | +0.25 | 실측 | [[terminal-bench]] 31.060606060606098%×0.5 |
| 에이전트 | 58.3 | +0.55 | 실측 | [[tau2-bench]] 73.3918128654971%×1.0, [[terminal-bench]] 31.060606060606098%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.1 | +0.74 | 실측 | [[aa-lcr]] 69.3333333333333%×1.0 |
| 지시 따르기 | 53.0 | +0.2 | 실측 | [[ifbench]] 53.74149659863951%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
