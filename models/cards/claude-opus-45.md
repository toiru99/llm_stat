---
type: Model
title: Claude Opus 4.5
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 53.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.9, z: 0.99, r: 64.9, estimated: false }  # 전문 지식
  reasoning: { s: 68.9, z: 1.05, r: 65.8, estimated: false }  # 추론
  coding: { s: 71.2, z: 1.14, r: 67.2, estimated: false }  # 코딩
  agentic: { s: 71.2, z: 1.27, r: 69.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.44, r: 56.5, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.51, r: 57.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude Opus 4.5

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 53.0 t/s · TTFT 13.98s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.9 | +0.99 | 실측 | [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 65.8 | +1.05 | 실측 | [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 67.2 | +1.14 | 실측 | [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 69.1 | +1.27 | 실측 | [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.5 | +0.44 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 57.6 | +0.51 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
