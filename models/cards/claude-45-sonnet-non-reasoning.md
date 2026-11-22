---
type: Model
title: Claude 4.5 Sonnet (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 53.5200655010245
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 45.2, z: -0.1, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.12, r: 51.8, estimated: false }  # 코딩
  agentic: { s: 57.4, z: 0.43, r: 56.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.6, z: -0.19, r: 47.1, estimated: false }  # 멀티모달
  long_context: { s: 60.9, z: 0.22, r: 53.2, estimated: false }  # 긴문맥
  instruction: { s: 42.9, z: -0.46, r: 43.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Claude 4.5 Sonnet (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 53.5200655010245 t/s · TTFT 1.25560877147496s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.1 | 실측 | [[gpqa-diamond]] 72.72727272727269%×0.4, [[humanitys-last-exam]] 7.228915662650599%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.72727272727269%×1.0, [[humanitys-last-exam]] 7.228915662650599%×1.0 |
| 코딩 | 51.8 | +0.12 | 실측 | [[terminal-bench]] 28.7878787878788%×0.5 |
| 에이전트 | 56.5 | +0.43 | 실측 | [[tau2-bench]] 70.4678362573099%×1.0, [[terminal-bench]] 28.7878787878788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.1 | -0.19 | 실측 | [[mmmu-pro]] 65.2023121387283%×1.0 |
| 긴문맥 | 53.2 | +0.22 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 43.1 | -0.46 | 실측 | [[ifbench]] 42.653061224489804%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
