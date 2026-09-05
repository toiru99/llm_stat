---
type: Model
title: Claude 4.1 Opus
creator: Anthropic
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: 11.55
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.3, z: 0.69, r: 60.4, estimated: false }  # 전문 지식
  reasoning: { s: 33.8, z: -0.06, r: 49.1, estimated: false }  # 추론
  coding: { s: 51.5, z: 0.68, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 61.6, z: 0.92, r: 63.9, estimated: false }  # 에이전트
  trust: { s: 46.7, z: 1.05, r: 65.8, estimated: true }  # 신뢰성
  multimodal: { s: 73.6, z: 0.17, r: 52.6, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.12, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.33, r: 55.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.1 Opus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude 4.1 Opus

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **27.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $11.55/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 2.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.4 | +0.69 | 실측 | [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 49.1 | -0.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 60.3 | +0.68 | 실측 | [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 63.9 | +0.92 | 실측 | [[tau2-bench]] 71.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 65.8 | +1.05 | 추정 | (추정) |
| 멀티모달 | 52.6 | +0.17 | 실측 | [[mmmu-pro]] 68.0%×1.0 |
| 긴문맥 | 66.7 | +1.12 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 55.0 | +0.33 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
