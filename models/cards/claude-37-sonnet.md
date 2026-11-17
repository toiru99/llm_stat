---
type: Model
title: Claude 3.7 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.6, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 30.7, z: -0.23, r: 46.5, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.26, r: 46.2, estimated: false }  # 코딩
  agentic: { s: 43.7, z: -0.03, r: 49.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 62.6, z: 0.28, r: 54.2, estimated: true }  # 긴문맥
  instruction: { s: 50.8, z: -0.12, r: 48.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.7 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude 3.7 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[gpqa-diamond]] 77.1717171717172%×0.4, [[humanitys-last-exam]] 9.67%×0.3 |
| 추론 | 46.5 | -0.23 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 77.1717171717172%×1.0, [[humanitys-last-exam]] 9.67%×1.0 |
| 코딩 | 46.2 | -0.26 | 실측 | [[terminal-bench]] 21.2121212121212%×0.5 |
| 에이전트 | 49.5 | -0.03 | 실측 | [[tau2-bench]] 54.678362573099406%×1.0, [[terminal-bench]] 21.2121212121212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.2 | +0.28 | 추정 | (추정) |
| 지시 따르기 | 48.2 | -0.12 | 실측 | [[ifbench]] 48.2993197278912%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
